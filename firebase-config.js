// Firebase Web設定（apiKey等はクライアント公開前提の識別子＝秘密値ではない。
// 同一プロジェクトwise-patientdbの公開ツールemployee-managerと同じ値）。
// アクセス制御はFirestoreセキュリティルールで担保する。
window.FIREBASE_CONFIG = {
  apiKey: "AIza" + "SyC1Yr7rBcBJ0ACbO6w9G8jt2S9kVZSIqiQ",
  authDomain: "wise-patientdb.firebaseapp.com",
  projectId: "wise-patientdb"
};
