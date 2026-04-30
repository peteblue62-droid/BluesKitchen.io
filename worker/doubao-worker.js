const ARK_RESPONSES_URL = "https://ark.cn-beijing.volces.com/api/v3/responses";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return withCors(null, 204);
    if (request.method !== "POST") return withCors({ error: "只支持 POST 请求" }, 405);

    if (!env.ARK_API_KEY) {
      return withCors({ error: "缺少 ARK_API_KEY 环境变量" }, 500);
    }

    const body = await request.json().catch(() => ({}));
    const question = String(body.question || "").trim();
    const pantry = Array.isArray(body.pantry) ? body.pantry : [];
    const favorites = Array.isArray(body.favorites) ? body.favorites : [];

    if (!question) return withCors({ error: "问题不能为空" }, 400);

    const model = env.ARK_MODEL || "doubao-seed-1-8-251228";
    const upstream = await fetch(ARK_RESPONSES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.ARK_API_KEY}`
      },
      body: JSON.stringify({
        model,
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text:
                  "你是一位中文家庭做饭助手。回答要实用、清楚、适合手机阅读。涉及菜谱时给出人数、用量、步骤、火候、注意事项和替代食材。"
              }
            ]
          },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: `冰箱食材：${pantry.join("、") || "未填写"}\n收藏菜谱：${favorites.join("、") || "无"}\n问题：${question}`
              }
            ]
          }
        ],
        temperature: 0.7
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      return withCors({ error: data.error?.message || "豆包接口请求失败" }, upstream.status);
    }

    return withCors({ answer: getResponseText(data) });
  }
};

function getResponseText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const output = Array.isArray(data.output) ? data.output : [];
  return output
    .flatMap((item) => (Array.isArray(item.content) ? item.content : []))
    .map((content) => content.text || "")
    .filter(Boolean)
    .join("\n");
}

function withCors(body, status = 200) {
  return new Response(body ? JSON.stringify(body) : null, {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
