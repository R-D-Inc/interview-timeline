## Questions

このプロジェクトはTwitterのようなタイムラインアプリを再現しようとしています。

0. このプロジェクトの実装に使用さているframeworkを教えてください。
1. このプロジェクトをdevelopmentモードで立ち上げて、src/pages/index.tsxにあたるpageを表示してください。
2. src/pages/index.tsxはuserの一覧を取得して表示していますが、表示部分をloopをよりわかりやすく短く書き直してください。
3. ユーザー数が100人程度だったとして、このuser一覧にpaginationをつけて10人ずつ表示する様、src/pages/index.tsxに実装してください。
4. ユーザー数が1,000,000人程度だったとして、このuser一覧にpaginationをつけて10人ずつ表示する様、src/pages/index.tsxに実装してください。
5. それぞれのユーザーを表すobjectを`User`として型定義していますが、このidを用いて、src/pages/index.tsxのuser一覧の名前をクリックするとusers/[uid]に遷移する様実装してください。
6. 見た目の設定について、dark modeとlight modeの2種類を持たせたいです。pages/index.tsxにボタンを設置し、これで切り替えができて、全ての画面においてこれが適用される様に実装してください。


## Preparation

### Environment File

```shell
cp .env.example .env.local
```

### Start Project In Development Mode

```shell
npm run dev
```
