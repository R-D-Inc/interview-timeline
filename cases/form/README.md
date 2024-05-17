## Questions

このプロジェクトはあるサービスを利用するアカウントを管理するために作られたものです。

0. このプロジェクトの実装に使用さているframeworkを教えてください。
1. このプロジェクトをdevelopmentモードで立ち上げて、`/`にあたるページをブラウザに表示してください。
2. cURLコマンドなどを使用して`http://localhost:3000/api/db`にPOSTメソッドでリクエストを送ってください。また、この操作に対応する実装の箇所をエディタ上で示して実装内容を簡単に教えてください。
3. `/users/`にあたるページをブラウザに表示し、実装内容を読んだ上で機能を説明してください。 また、`src/app/api/users/route.ts`との関係を簡単に教えてください。
4. 3で読んだコードについて、ページの実装部分のものとapiの実装部分ものの悪い点を挙げてください。3分程度見てわかるもので構いません。
5. TypeScriptにおける`any`と`unknown`の違いについて簡単に説明してください。言語仕様の詳細を参照する必要はなく、ユースケースや比喩を用いてお話し頂いて構いません。
6. 3のページのuser取得ロジックをエディタ上で示し、その実装の型付けの問題点を説明しつつ解決策を実際に実装してください。
7. formは`action` attributeに処理を渡すことで実装されていますが、`onSubmit`を用いて実装し直してください。
8. JavaScriptにおけるEvent objectのプロパティである、`target`と`currentTarget`の違いを簡単に説明してください。
9. 3のページに対して、使用している管理者ユーザーのroleがwriterであればアカウント追加ボタンを画面に表示し、viewerであればアカウント追加ボタンは表示しないという仕様を実現するとき、どのように実装しますか。使用している管理者ユーザーのデータは`useMe`で与えられるものとします。
10. 3のページに対して更新処理を追加したいという要望があります。form部分のUIは全く同じなのでその実装は共通化したいです。どのようなcomponent設計で実装しますか。
11. 3のページに対して削除処理を追加したいという要望があります。form部分のUIは全く同じでinputだけdisableなものなのでその実装は共通化したいです。どのようなcomponent設計で実装しますか。

## Preparation

### Start Project In Development Mode

With the commands below you can install the dependencies and start the server in development mode.

```shell
npm install
npm run dev
```

If you prefer docker environment take this.

```shell
docker compose up
```
