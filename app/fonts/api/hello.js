// app/api/hello.js
export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello, Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  