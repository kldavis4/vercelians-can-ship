const generateRandomString = (len: number) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let str = ''
    for (let i = 0; i < len; i++) {
      str += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return str
  }

export async function GET(request: Request) {
    // generate random length between 1k and 1MB
    const length = Math.floor(Math.random() * 1024 * 1024) + 1024
    return new Response(JSON.stringify({
      url: request.url,
      time: new Date().toISOString(),
      data: generateRandomString(length)
    }), { headers: { 'content-type': 'application/json' }})
}
  