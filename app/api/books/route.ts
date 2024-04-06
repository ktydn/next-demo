var books = [{ title: "吾輩は猫である", author: "夏目漱石" }];

export async function GET(request: Request) {
  return Response.json({ books: books }, { status: 200 });
}

export async function POST(request: Request) {
  var book = await request.json();
  books.push({ title: book.title, author: book.author });
  return Response.json({ result: "OK" }, { status: 200 });
}
