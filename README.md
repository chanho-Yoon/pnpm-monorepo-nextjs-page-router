# PNPM-WORKSPACE-MONOREPO

pnpm 패키지를 사용 workspace를 이용해 monorepo 보일러플레이트 프로젝트

---
## 디렉토리 구성
```
├── apps
│   └── web(next.js)
│
├── packages
│   ├── shared-ui(react)
│   └── types
│
│── .editorconfig
│── .eslintignore
│── .eslintrc.js
│── .gitignore
│── package.json
│── pnpm-lock.yaml
│── pnpm-workspace.yaml
│── README.md
└── tsconfig.json
```
---

## apps/web version
- node: v18
- react: v18
- next.js: v13

## packages/shared-ui version
- storybook: v7
- node: v18
- react: v18

## 기본 설명

### apps

- 모노레포로 관리할 프로젝트 부분

### packages

- shared-ui : 공통적으로 사용할 수 있는 UI 컴포넌트
- types : 공통으로 사용할 수 있는 typescript file


### ENV 설정

- local, development, production 환경 분리

### 실행 스크립트
**프로젝트 root 디렉토**리에서 실행하는 스크립트 명령어

패키지 종속성 설치
```
  pnpm install
```
dev
```
  pnpm dev:local
  pnpm dev:development
  pnpm dev:production
```
build
```
  pnpm build:local
  pnpm build:development
  pnpm build:production
```
start
```
  pnpm start
```
lint
```
  pnpm lint
```
add
```
  pnpm --filter <package name> cmd
  pnpm --filter <package name> cmd -D
```

이외 스크립트 명령어는 해당하는 패키지 디렉토리로 가서 스크립트를 실행하면 됨