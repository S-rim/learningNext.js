# 설정 커스터마이징

webpack 및 babel 설정은 커스터마이징이 가능하다.

## webpack

    module.exports = {
    webpack: (config, { dev }) => {
        return config
        }
    }

최상위 디렉토리에 위처럼 next.config.js 파일을 만들어 설정하면 된다.

메뉴얼에 따르면 불러올 수 있는 파일 형식을 추가하기위해 loader를 쓰는 건 좋지 않다고 한다. 클라이언트 쪽 코드만 웹팩으로 번들되어 서버사이드렌더링이 잘 작동하지 않을 수 있기 때문이다. 그 대신 바벨 플러그인을 사용하라고 한다.

## babel

    {
    "presets": [
        "next/babel",
        "stage-0"
        ]
    }

최상위에 .babelrc 파일을 만들어 설정하면 된다.
