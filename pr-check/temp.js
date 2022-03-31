chrome.runtime.onMessage.addListener(function() {
    var area = document.querySelector('.comment-form-textarea')

    var text = "## チェックリスト\n* [ ] リリーススケジュールの登録（[登録方法](https://zozo.rickcloud.jp/wiki/pages/viewpage.action?pageId=247835127)）\n* [ ] URL・META・OGの依頼\n* [ ] デザインFIX状況確認\n* [ ] 終了ページのデザイン有無\n  * [ ] 終了時の対応方法（404にするか終了ページにするか）\n* [ ] リリース後の更新有無\n* [ ] ページコンテンツの詳細\n  * [ ] API周りの改修が必要かどうか\n  * [ ] 商品一覧の表示条件（並び順・絞り込み・在庫状況）\n  * [ ] 性別切り替え\n* [ ] 開発（レビュー時の観点）\n  * [ ] 開発用のtagID\n* [ ] 画像\n  * [ ] ファイル名が半角英数字になっていないか\n  * [ ] タイムスタンプ更新\n* [ ] テスト\n  * [ ] デザイン最新状態かどうか\n  * [ ] URLが正しいか（性別パラメーターの有無）\n  * [ ] meta\n  * [ ] rid\n  * [ ] webview表示\n  * [ ] tagidの本番設定\n  * [ ] 開発用のデータが入ってないか\n* [ ] 遷移先の確認\n  * [ ] 検索結果のタイトル\n  * [ ] 文字化け";
    area.value = area.value.substr(0, area.selectionStart)
			+ text
			+ area.value.substr(area.selectionStart);

            
});