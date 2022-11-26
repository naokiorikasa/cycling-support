# サイクリングをサポートするアプリ

## 環境構築

```
expo init cycling-support
```

## **blank (TypeScript)**

---

## 位置情報の取得とパーミッション許可するパッケージをインストール

```
expo install expo-permissions
expo install expo-location
```

## 地図表示するパッケージをインストール

```
expo install react-native-maps
```

## 画面遷移用のパッケージをインストール

```
yarn add @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## Permissions 確認時のアラートにディスクリプション追加

```javascript:app.json
  "ios": {
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "GPS Track Memoはアプリ内で取得した緯度と経度の配列を表示するために位置情報を利用します",
        "UIBackgroundModes": [
          "location"
        ]
      },
    },
```

##　　状態管理に Recoil を使用してみる（※）

```
yarn add recoil
```

## 地図

```
expo install react-native-maps
```

## ディレクトリ構成

```
.
├── api -> バックエンドや外部サービスとの通信設定
├── assets -> 画像ファイル
├── atoms -> 状態管理ライブラリRecoilのAtom関連ファイル
├── components -> コンポーネント
├── constants -> 定数ファイル
├── context -> store, reducer関連
├── navigation -> ルーティング関連
└── screens -> 画面
```

###　参考
https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native
https://reactnavigation.org/docs/bottom-tab-navigator/
