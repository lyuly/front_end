namespace Use {
  export function log(msg: any) {
    console.log(msg)
  }
  export function error(msg: any) {
    console.error(msg)
  }
}

Use.log('call me')
Use.error('ok')

namespace Hello {
  export function log(msg: string) {
    console.log(msg)
  }

  export function info(msg: string) {
    console.info(msg)
  }
}

Hello.log('World')
Hello.info('Windy')