import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Mail, 
  X, 
  ShieldCheck, 
  Award, 
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [email3, setEmail3] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent, email: string, clearFn: () => void) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      return;
    }
    setSubmittedEmail(email);
    setIsSuccessModalOpen(true);
    clearFn();
  };

  return (
    <div className="min-h-screen bg-white text-black font-['Arial',sans-serif] selection:bg-black selection:text-white antialiased">
      {/* Main Container */}
      <main>
        {/* Header Graphic (Full Width) */}
        <section className="w-full bg-white pt-0">
          <img
            src="/LP1header.jpg?v=2"
            alt="大人のテニスIQ戦略 【無料】動画プログラム - 週1練習・軟式上がり 県大会1回戦負け42歳のおじさんが2年後、県チャンピオンになってしまった“大人のズルい戦い方”"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
          {/* Urgency Notice under Header */}
          <div className="pt-4 sm:pt-6 pb-1 text-center px-4">
            <p className="text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold tracking-tight">
              <span className="bg-[#FFE600] text-black px-4 sm:px-6 py-1.5 sm:py-2 inline-block">
                〇月〇日（◯）までの期間限定公開
              </span>
            </p>
          </div>
        </section>

        {/* Top Section: CTA 1 */}
        <section className="w-full bg-white pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-4 sm:pt-6">
            {/* CTA Form 1 (Standout Bold Rounded Card) */}
            <div id="cta-section-1" className="border-[3px] sm:border-4 border-black rounded-3xl px-5 sm:px-10 py-7 sm:py-11 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-neutral-800 mb-2 sm:mb-3 leading-relaxed tracking-tight">
                ＼県大会1回戦負け→5年で優勝19回を実現した／
              </h3>
              <p className="text-xl sm:text-3xl font-black mb-8 text-black">
                動画プログラムを“無料で”受け取る
              </p>

              <form onSubmit={(e) => handleSubmit(e, email1, () => setEmail1(''))} className="space-y-4 max-w-lg mx-auto text-left">
                <div>
                  <label htmlFor="email1" className="block text-base font-bold text-black mb-2">
                    メールアドレス
                  </label>
                  <div className="relative">
                    <input
                      id="email1"
                      type="email"
                      required
                      value={email1}
                      onChange={(e) => setEmail1(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3.5 border-2 border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg placeholder:text-neutral-400"
                    />
                    <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4.5 sm:py-5.5 px-4 min-[360px]:px-5 sm:px-8 min-h-[64px] sm:min-h-[76px] bg-gradient-to-b from-[#14dc68] via-[#06C755] to-[#04a846] text-white font-black text-[12px] min-[360px]:text-[13px] min-[390px]:text-[14px] min-[420px]:text-[15px] sm:text-[17px] md:text-xl border-t border-white/35 rounded-2xl shadow-[0_6px_0_0_#038c3c,0_12px_24px_-4px_rgba(6,199,85,0.45)] hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#038c3c,0_16px_28px_-4px_rgba(6,199,85,0.55)] active:translate-y-[4px] active:shadow-[0_2px_0_0_#038c3c,0_4px_10px_0px_rgba(6,199,85,0.4)] transition-all duration-150 cursor-pointer flex items-center justify-center text-center leading-normal whitespace-nowrap overflow-hidden drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] tracking-tighter min-[390px]:tracking-tight sm:tracking-normal"
                >
                  <span className="whitespace-nowrap">▶︎今すぐ無料動画プログラムを手に入れる</span>
                </button>
                <p className="text-xs sm:text-sm text-neutral-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  ご登録いただいた情報は厳重に管理され、いつでも配信停止できます。
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Section 2: Empathy / Pain Points (Warm Beige Background #EDE6D8) */}
        <section className="w-full bg-[#EDE6D8] py-16 sm:py-24 border-y border-[#D8CFBF]">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-black leading-snug sm:leading-tight tracking-tight text-neutral-900">
                あなたは試合のたびに<br />
                <span className="relative inline-block">
                  こんな悔しい思い
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
                </span>
                をしていませんか？
              </h2>
            </div>

            {/* Checklist */}
            <div className="border-2 border-black divide-y divide-neutral-200 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl overflow-hidden">
              {[
                "試合になるとレッスンや練習でできていることができなくなる",
                "ロブばかり打つシコラーのおじさんに負けてしまう",
                "苦しい展開になるとギャンブルショットに頼って自滅してしまう",
                "自滅する度に「自分は何をやっているんだろう」と自己嫌悪になる",
                "テニス仲間に「え、あの人に負けたの？」と言われてしまう",
                "気づけば自分よりもテニス歴の短い人の方が試合に勝ち始めている",
                "負けた言い訳をキャリアのせいにして誤魔化してしまう",
                "現実問題、これ以上練習時間を確保できない",
                "いつもテニスエリートやコーチたちのカモにされてしまう",
                "せっかくエントリー代を払っても1試合しかできない"
              ].map((text, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-start gap-3.5 hover:bg-neutral-50 transition-colors">
                  <span className="font-bold text-lg sm:text-xl text-red-600 select-none shrink-0 leading-tight">✔︎</span>
                  <p className="text-base sm:text-lg font-bold text-black leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Explanation heading */}
            <div className="pt-4 sm:pt-8 text-center">
              <h3 className="text-xl sm:text-3xl font-black leading-relaxed tracking-tight text-black">
                もし、あなたが1つでも<br />
                <span className="relative inline-block">
                  当てはまっているなら
                  <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
                </span>
              </h3>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-neutral-900 leading-relaxed">
              <p>
                この「大人のテニスIQ戦略」無料動画プログラムは、まさにあなたのためのものです。
              </p>
              <p>
                なぜなら、あなたが試合で勝てないのは、<span className="font-bold text-red-600">「あなたのキャリアが浅いから」でも「練習時間を確保できないから」でもありません。</span>
              </p>
              <p>
                ただ、テニスエリートたちがやっているプレーを参考にしすぎてしまい、今持っている技術を正しく組み合わせる『思考（テニスIQ）』が抜け落ちてしまっているだけなのです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Paradigm Shift (Clean White Background) */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-black leading-snug sm:leading-tight tracking-tight text-neutral-900">
                練習時間や体力がなくても、<br />
                <span className="relative inline-block">
                  「テニスIQ」
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
                </span>
                があればエリートに勝てます！
              </h2>
            </div>

            {/* Victory Banner Image */}
            <div className="space-y-2">
              <img
                src="/Victory.jpg"
                alt="静岡県大会優勝の実績（2021年〜2026年 表彰状）"
                className="w-full h-auto object-contain block mx-auto rounded-xl shadow-sm"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs sm:text-sm text-neutral-500 text-center tracking-tight">
                静岡県シングルスベテラン優勝
              </p>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-neutral-900 leading-relaxed">
              <p>
                40代を過ぎた週末プレーヤーが、若者やテニスエリートと同じように「体力」や「新しい技術」で真っ向勝負しようとすると、必ず限界が来ます。
              </p>
              <p>
                ですが、心配する必要は一切ありません。
              </p>
              <p>
                なぜならテニスは、身体能力やパワーだけで決まるスポーツではなく、相手の心理を読んでパズルを組み立てる「頭脳戦」でもあるからです。
              </p>
              <p className="font-bold pt-2 text-black">
                この無料動画プログラムでは、軟式上がり・週1練習の私が、44歳を過ぎてから県チャンピオンになれた【大人のズルい戦い方】の全貌を公開します。
              </p>
            </div>
          </div>
        </section>

      {/* Section 4: Program Contents (Warm Beige Background #EDE6D8) */}
      <section className="w-full bg-[#EDE6D8] py-16 sm:py-24 border-y border-[#D8CFBF]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              この無料プログラムで、<br className="sm:hidden" />
              <span className="relative inline-block">
                あなたが手に入れるもの
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-9 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06),0_8px_10px_-6px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="text-base sm:text-xl font-bold flex items-baseline gap-2 text-black">
                <span className="text-xl sm:text-2xl font-black">1、</span>
                <span>「今の技術のまま」で勝率を跳ね上げる方法</span>
              </h3>
              <div className="overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                <img
                  src="/program1.png"
                  alt="「今の技術のまま」で勝率を跳ね上げる方法"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                フォーム改造や、新しいショットの習得に膨大な時間をかける必要はありません。あなたが「今持っている技術」を正しく組み合わせるだけで、相手のミスを引き出し、勝率を劇的に上げる方法をお伝えします。
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-9 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06),0_8px_10px_-6px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="text-base sm:text-xl font-bold flex items-baseline gap-2 text-black">
                <span className="text-xl sm:text-2xl font-black">2、</span>
                <span>パニックを防ぐ「大人のカンニングペーパー」の作り方</span>
              </h3>
              <div className="overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                <img
                  src="/program2.png"
                  alt="パニックを防ぐ「大人のカンニングペーパー」の作り方"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                「試合中の大事な場面になると頭が真っ白になる…」そんな悩みは今日で終わりです。考えるのではなく、反射的に正しい配球が選べるようになる「If-Thenプランニング」の構築法を伝授します。
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-9 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06),0_8px_10px_-6px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="text-base sm:text-xl font-bold flex items-baseline gap-2 text-black">
                <span className="text-xl sm:text-2xl font-black">3、</span>
                <span>テニスエリートやコーチを実力でねじ伏せる「戦術設計」</span>
              </h3>
              <div className="overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                <img
                  src="/src/assets/images/tennis_elite_tactic_design_1792586754352.jpg"
                  alt="テニスエリートやコーチを実力でねじ伏せるタブレット戦術アナリティクス（TENNIS TACTICAL ANALYSIS）イメージ"
                  className="w-full h-48 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                これまであなたをカモにしてきたテニスエリートたちに、まぐれではなく、実力で完全に打ち勝つ。そして、ネット越しに心の中で「ドヤ顔」するための具体的な戦術が手に入ります。
              </p>
            </div>
          </div>

          <div className="pt-8 sm:pt-10 space-y-3 sm:space-y-4 text-left">
            <div className="w-32 sm:w-44 md:w-52">
              <img
                src="/no_workout_transparent.png?v=3"
                alt="厳しい筋トレや走り込みは一切不要"
                className="w-full h-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-left text-base sm:text-lg md:text-xl font-bold text-black leading-relaxed">
              もちろん、この戦術を身につけるために、アスリートのような厳しい筋トレや走り込みをする必要は一切ありませんので、安心してください。
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: 4 Bonuses (Clean White Background) */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-8 sm:space-y-10">
          {/* Transition & Yellow Banner tightly grouped */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-center space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-3xl font-black tracking-tight text-neutral-900">
                さらに今、<span className="relative inline-block">動画プログラムを受け取った方限定<span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FFE600]/60 -z-10 rounded-sm"></span></span>で
              </h3>
              <div className="flex justify-center -mb-1">
                <svg
                  className="w-8 h-11 sm:w-10 sm:h-13 animate-bounce"
                  viewBox="0 0 64 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Hard black offset shadow */}
                  <polygon
                    points="22,4 42,4 42,34 56,34 32,64 8,34 22,34"
                    fill="#000000"
                    transform="translate(4, 4)"
                  />
                  {/* Red arrow body with black outline */}
                  <polygon
                    points="22,4 42,4 42,34 56,34 32,64 8,34 22,34"
                    fill="#E60012"
                    stroke="#000000"
                    strokeWidth="3.5"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
            </div>

            <div className="border-4 border-black p-6 sm:p-10 text-center bg-[#FFE600] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <p className="text-base sm:text-xl font-bold mb-3 tracking-wide text-black">
                惨めな1回戦負けから完全に卒業する
              </p>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                『4大特典セット』無料プレゼント！
              </h2>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
            あなたが次の試合からすぐに「大人のズルい戦い方」を実践できるよう、これまで有料で提供してきたノウハウも含むこんな【4つの特別なプレゼント】をご用意しました。
          </p>

          <div className="space-y-6">
            {/* Bonus 1 */}
            <div className="bg-[#EDE6D8] rounded-2xl p-6 sm:p-9 space-y-5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-[#D8CFBF]">
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black text-center leading-snug sm:leading-snug">
                特典1：初対戦の相手から“無意識のクセ”を<br />
                読み取る！『情報収集術』
              </h3>
              <div className="flex items-center justify-center py-1">
                <img
                  src="/tokuten1.png"
                  alt="特典1：初対戦の相手から“無意識のクセ”を読み取る！『情報収集術』"
                  className="max-h-52 sm:max-h-60 object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                市民大会や県大会で一番怖い「相手がどんなテニスをしてくるか分からない」という不安をゼロにします。試合前の「5分間のアップ」だけで、相手の最大の弱点や<span className="font-bold text-red-600">「困った時にどこに逃げるか」を見抜く3つのテクニック</span>を公開。試合開始のコールが鳴る前から、あなたが相手を完全にコントロールできるようになります。
              </p>
            </div>

            {/* Bonus 2 */}
            <div className="bg-[#EDE6D8] rounded-2xl p-6 sm:p-9 space-y-5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-[#D8CFBF]">
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black text-center leading-snug sm:leading-snug">
                特典2：【動画で解説】緊張の正体を知って<br />
                試合に勝つメンタル攻略法
              </h3>
              <div className="flex items-center justify-center py-1">
                <img
                  src="/tokuten2.png"
                  alt="特典2：【動画で解説】緊張の正体を知って試合に勝つメンタル攻略法"
                  className="max-h-52 sm:max-h-60 object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                試合になると、腕が縮こまってミスをしてしまう「チキり」や「パニック」を根結するための特別動画です。緊張のメカニズムを科学的に理解することで、プレッシャーのかかる場面でも頭が真っ白にならず、<span className="font-bold text-red-600">練習通りにポイントを取り切る</span>「ブレないメンタル」が手に入ります。
              </p>
            </div>

            {/* Bonus 3 */}
            <div className="bg-[#EDE6D8] rounded-2xl p-6 sm:p-9 space-y-5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-[#D8CFBF]">
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black text-center leading-snug sm:leading-snug">
                特典3：【コピペでOK】あなた専用の<br />
                『勝ち筋』をAIが自動作成！秘密のAI指示書
              </h3>
              <div className="flex items-center justify-center py-1">
                <img
                  src="/tokuten3.png"
                  alt="特典3：【コピペでOK】あなた専用の『勝ち筋』をAIが自動作成！秘密のAI指示書"
                  className="max-h-52 sm:max-h-60 object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                ChatGPTやGeminiといったAIを使って、あなた専用の戦術を自動で作らせる魔法のツールです。あなたの「得意なショット」や「苦手なショット」を、この指示書通りにコピペしてAIに入力するだけ。<span className="font-bold text-red-600">今の技術のまま勝率を跳ね上げる「具体的な配球パターン」</span>をAIが瞬時に弾き出してくれます。
              </p>
            </div>

            {/* Bonus 4 */}
            <div className="bg-[#EDE6D8] rounded-2xl p-6 sm:p-9 space-y-5 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-[#D8CFBF]">
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black text-center leading-snug sm:leading-snug">
                特典4：【迷いが消える】ダブルスで勝つための<br />
                『試合前3分チェックリスト』
              </h3>
              <div className="flex items-center justify-center py-1">
                <img
                  src="/tokuten4.png"
                  alt="特典4：【迷いが消える】ダブルスで勝つための『試合前3分チェックリスト』"
                  className="max-h-40 sm:max-h-48 object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
                「いつポーチに出るか迷う」「センターのお見合いしてしまう」など、ダブルス特有の悩みを一気に解消するチェックリストです。<span className="font-bold text-red-600">試合前にペアと3分間確認するだけで迷いが一切なくなり</span>、あなたが試合を支配して、ペアから「次もまた組んでほしい！」と頼られる存在へ生まれ変わります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Apology / Urgency & CTA 2 (Warm Beige Background #EDE6D8) */}
      <section className="w-full bg-[#EDE6D8] py-16 sm:py-24 border-y border-[#D8CFBF]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-12">
          {/* Apology / Urgency */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-6 sm:mb-8">
              ですが、申し訳ございません
            </h2>
            <div className="text-left space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed">
              <p>
                これらの特典には、過去に有料で販売していた内容も含まれているため、無料プレゼントは【〇月〇日（◯）】までの期間限定とさせてください。
              </p>
              <p className="font-bold text-black">
                〇月〇日（◯）を過ぎますと、<span className="bg-[#FFE600] px-1.5 py-0.5 text-black">これらの無料特典は“一切の例外なく”受け取れなくなってしまいます</span>ので、必ず今すぐ受け取ってください。
              </p>
            </div>
          </div>

          {/* CTA 2 Card (Standout Bold Rounded Card) */}
          <div className="border-[3px] sm:border-4 border-black rounded-3xl px-5 sm:px-10 py-7 sm:py-11 bg-white text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[13px] min-[360px]:text-[14.5px] min-[400px]:text-[16px] sm:text-[19px] md:text-[23px] lg:text-[25px] font-black mb-8 tracking-tight whitespace-nowrap text-black">
              ＼今すぐ無料プログラムと4大特典を受け取る／
            </h2>

            <form onSubmit={(e) => handleSubmit(e, email2, () => setEmail2(''))} className="space-y-4 max-w-lg mx-auto text-left">
              <div>
                <label htmlFor="email2" className="block text-base font-bold text-black mb-2">
                  メールアドレス
                </label>
                <div className="relative">
                  <input
                    id="email2"
                    type="email"
                    required
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3.5 border-2 border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg placeholder:text-neutral-400"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4.5 sm:py-5.5 px-4 min-[360px]:px-5 sm:px-8 min-h-[64px] sm:min-h-[76px] bg-gradient-to-b from-[#14dc68] via-[#06C755] to-[#04a846] text-white font-black text-[11.5px] min-[360px]:text-[12.5px] min-[390px]:text-[13.5px] min-[420px]:text-[14.5px] sm:text-[16.5px] md:text-xl border-t border-white/35 rounded-2xl shadow-[0_6px_0_0_#038c3c,0_12px_24px_-4px_rgba(6,199,85,0.45)] hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#038c3c,0_16px_28px_-4px_rgba(6,199,85,0.55)] active:translate-y-[4px] active:shadow-[0_2px_0_0_#038c3c,0_4px_10px_0px_rgba(6,199,85,0.4)] transition-all duration-150 cursor-pointer flex items-center justify-center text-center leading-normal whitespace-nowrap overflow-hidden drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] tracking-tighter min-[390px]:tracking-tight sm:tracking-normal"
              >
                <span className="whitespace-nowrap">▶︎今すぐ無料プログラムと4大特典を受け取る</span>
              </button>
              <p className="text-xs sm:text-sm text-neutral-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4" />
                スパム等は一切送信いたしません。安心してご登録ください。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section (お客様の声) */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-neutral-300">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-12 sm:space-y-14">
          <div className="text-center">
            <h2 className="text-[18px] min-[360px]:text-[20px] min-[400px]:text-[22px] sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-900 leading-snug whitespace-nowrap">
              一足先に実践した
              <span className="relative inline-block ml-1">
                お客様の声
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* 1人目 */}
            <div className="bg-white border-2 border-neutral-300 rounded-2xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)] space-y-7 sm:space-y-8 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 pb-1 sm:pb-2">
                <h3 className="text-xl sm:text-2xl md:text-[27px] font-black text-[#F15A24] leading-snug sm:leading-tight tracking-tight">
                  「学生時代に習った常識を覆す戦術を教わり、<br />
                  テニスが一変しました」
                </h3>
                <span className="text-4xl sm:text-5xl font-serif text-neutral-300 leading-none select-none shrink-0 pointer-events-none font-bold">
                  ”
                </span>
              </div>

              {/* 上段: 左側に円形写真、右側に最初の2段落 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[3px] border-black overflow-hidden shrink-0">
                  <img
                    src="/IM.png"
                    alt="I・M様（40代男性）"
                    className="w-full h-full object-cover object-top block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed flex-1 text-left">
                  <p>
                    6年のブランクと体力不足で、少し動かされるだけでミスを連発し、すっかり自信を失っていました。YouTubeのレッスン動画を見ても「実際の試合でいつ使うか」が判断できず、コートでは全く実践できませんでした。
                  </p>
                  <p>
                    しかし、長谷川さんから「相手の配球を予測する戦略」や、「わざと短く打って有利に展開する」という学生時代に習った常識を覆す戦術を教わり、テニスが一変しました。
                  </p>
                </div>
              </div>

              {/* 下段: 全幅で残りの3段落 */}
              <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed text-left">
                <p>
                  予測が立つことで動き出しが早くなり、諦めていた遠いボールにも届くようになったんです。心に余裕が生まれ、ミスも劇的に減りました。
                </p>
                <p>
                  今では仲間から「動けるようになったね！」と驚かれ、練習グループで一番になってやると思えるほど自信を取り戻しました。
                </p>
                <p className="font-bold text-neutral-900 pt-1">
                  試合でなかなか勝てず、壁を感じている方には本当にオススメです！
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 text-right">
                <p className="font-bold text-neutral-900 text-base sm:text-lg">
                  I・M様（40代男性）
                </p>
              </div>
            </div>

            {/* 2人目 */}
            <div className="bg-white border-2 border-neutral-300 rounded-2xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)] space-y-6 sm:space-y-7 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 pb-1 sm:pb-2">
                <h3 className="text-xl sm:text-2xl md:text-[27px] font-black text-[#F15A24] leading-snug sm:leading-tight tracking-tight">
                  『勝つための戦略』でショットの使い所が分か<br />
                  るようになりました！
                </h3>
                <span className="text-4xl sm:text-5xl font-serif text-neutral-300 leading-none select-none shrink-0 pointer-events-none font-bold">
                  ”
                </span>
              </div>

              {/* 上段: 左側に円形写真、右側に最初の2段落 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[3px] border-black overflow-hidden shrink-0">
                  <img
                    src="/MA.jpg"
                    alt="M・A様（女性）"
                    className="w-full h-full object-cover object-[center_20%] block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed flex-1 text-left">
                  <p>
                    普段通っているテニススクールでは、自分が克服したいメニューをガッツリと練習できないことに物足りなさを感じていました。
                  </p>
                  <p>
                    そこで、ご自身も現役で試合に出場し、結果を出している長谷川さんなら「試合で勝つための具体的な戦略」を教えてもらえると思い参加を決めました。
                  </p>
                </div>
              </div>

              {/* 下段: 全幅で残りの段落 */}
              <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed text-left">
                <p>
                  実際にアドバイスを受けてみて、ただボールを綺麗に打つ練習ではなく、「この場面ではどう配球するか」というショットの使い所が明確にわかるようになってきました。
                </p>
                <p className="font-bold text-neutral-900 pt-1">
                  漠然とスクールに通うのではなく、「試合に勝ちたい」という明確な目的を持っている人には、間違いなくオススメしたいです！
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 text-right">
                <p className="font-bold text-neutral-900 text-base sm:text-lg">
                  M・A様（女性）
                </p>
              </div>
            </div>

            {/* 3人目 */}
            <div className="bg-white border-2 border-neutral-300 rounded-2xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)] space-y-6 sm:space-y-7 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 pb-1 sm:pb-2">
                <h3 className="text-xl sm:text-2xl md:text-[27px] font-black text-[#F15A24] leading-snug sm:leading-tight tracking-tight">
                  スクールのコーチに『そんなの教えてないよ！』<br />
                  と驚かれる、実戦で使えるパターンを習いました！
                </h3>
                <span className="text-4xl sm:text-5xl font-serif text-neutral-300 leading-none select-none shrink-0 pointer-events-none font-bold">
                  ”
                </span>
              </div>

              {/* 上段: 左側に円形写真、右側に最初の2段落 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full border-[3px] border-black overflow-hidden shrink-0">
                  <img
                    src="/FU.jpg"
                    alt="F・U様（女性）"
                    className="w-full h-full object-cover object-[center_20%] block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed flex-1 text-left">
                  <p>
                    ずっとフォアのストロークに悩んでいて、ダブルスの試合でもペアに任せっきりになってしまう状態からなんとか変わりたいと思っていました。
                  </p>
                  <p>
                    長谷川さんから学んで一番大きかったのは、通常のレッスンではなかなか聞くことができない「試合の中での具体的な動き方」を教えてもらえたことです。
                  </p>
                </div>
              </div>

              {/* 下段: 全幅で残りの段落 */}
              <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed text-left">
                <p>
                  教わったことを実際の試合でどんどんトライするようになるとプレーの幅が広がり、スクールのコーチからも「そんなパターン、レッスンでは教えていないよ！」と驚かれるくらい、実戦で使える戦術を身につけることができました。
                </p>
                <p className="font-bold text-neutral-900 pt-1">
                  試合に出始めたばかりで、「どうやったら勝てるのか（勝ち方）」がまだ分からないという人には、本当にオススメです。
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 text-right">
                <p className="font-bold text-neutral-900 text-base sm:text-lg">
                  F・U様（女性）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Profile & Achievements (Warm Beige Background #EDE6D8) */}
      <section className="w-full bg-[#EDE6D8] py-16 sm:py-24 border-b border-[#D8CFBF]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-14 sm:space-y-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 leading-snug sm:leading-tight">
              最後に少しだけ<br />
              <span className="relative inline-block">
                私の自己紹介
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
              </span>
              をさせてください
            </h2>
          </div>

          <div className="border-2 border-neutral-400 rounded-2xl p-7 sm:p-11 space-y-7 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="border-b border-neutral-300 pb-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <img
                src="/profile.png?v=3"
                alt="長谷川 誠（49歳）"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  長谷川 誠（49歳）
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  軟式上がり・片手バックハンド・社会人になってからは「週1練習」の、どこにでもいる普通のおじさんプレーヤー。
                </p>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-900 leading-relaxed">
              <p>
                2019年の県シングルス1回戦、前年チャンピオンのテニスコーチ相手に、ギャラリーの前で惨めなボロ負けをしたことをきっかけに、見栄やプライドを捨てて【テニスIQ】を徹底的に磨く。
              </p>
              <p>
                その結果、プレースタイルを変えたり、新しい技術を身につけたりすることなく、相手のミスを引き出す「大人のズルい戦い方」だけで、44歳を過ぎてから急にベテランの県チャンピオンに。
              </p>
            </div>
          </div>

          {/* Track Record */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center justify-center gap-2 text-neutral-900">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-amber-500" />
                <span className="relative inline-block">
                  これまでの実績
                  <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
                </span>
              </h3>
            </div>

            <div className="border-2 border-neutral-400 rounded-2xl p-7 sm:p-10 space-y-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="text-base sm:text-lg font-bold text-neutral-800 pb-2 border-b border-neutral-300">
                2019年静岡県シングルス40歳以上1回戦負け
              </div>
              <div className="text-center py-1 text-black font-extrabold text-lg">
                ↓
              </div>
              <ul className="space-y-2.5 text-base sm:text-lg font-normal text-neutral-900">
                {[
                  "2021年 静岡県シングルス40歳以上優勝",
                  "2022年 浜松市スポーツ祭45歳以上優勝",
                  "2022年 中遠シングルス45歳以上優勝",
                  "2023年 静岡県シングルス45歳以上優勝",
                  "2023年 ダンロップダブルス静岡県45歳以上優勝",
                  "2023年 ダンロップダブルス静岡県代表",
                  "2023年 ダンロップダブルス45歳以上東海大会3位",
                  "2023年 宮城県民体育大会シングルス45歳以上優勝",
                  "2024年 静岡県シングルス45歳以上優勝",
                  "2024年 静岡トーナメント45歳以上優勝",
                  "2024年 遠州シングルス45歳以上優勝",
                  "2024年 静岡県クラブ対抗中部大会45歳以上優勝",
                  "2024年 静岡県クラブ対抗45歳以上優勝",
                  "2024年 中遠ダブルス45歳以上優勝",
                  "2024年 宮城県民体育大会シングルス45歳以上優勝",
                  "2025年 静岡県シングルス45歳以上優勝",
                  "2025年 NWTCダブルス45歳以上優勝",
                  "2025年 静岡県クラブ対抗中部大会45歳以上優勝",
                  "2025年 遠州ミックス40歳以上優勝",
                  "2025年 初生シングルス45歳以上優勝",
                  "2025年 新日本スポーツ連盟45歳以上静岡県代表",
                  "2025年 新日本スポーツ連盟45歳以上全国大会ベスト8",
                  "2026年 静岡県シングルス35歳以上優勝",
                  "2026年 新日本スポーツ連盟45歳以上静岡県代表",
                  "2026年 静岡県クラブ対抗中部大会45歳以上優勝",
                  "2026年 掛川市ダブルス45歳以上優勝"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Closing Message & CTA 3 (Clean White Background) */}
      <section className="w-full bg-white py-16 sm:py-24 border-t border-[#D8CFBF]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
          {/* Closing Message */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-black leading-snug sm:leading-tight tracking-tight text-neutral-900">
                休日の貴重な時間とお金を使った<br />
                <span className="relative inline-block">
                  惨めな1回戦負けが今日終わります
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE600]/60 -z-10 rounded-sm"></span>
                </span>
              </h2>
            </div>

            {/* メッセージ本文（左側にtennis1.png、高さとバランスを同期） */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-28 min-[380px]:w-32 min-[440px]:w-36 sm:w-44 md:w-52 shrink-0 flex items-center justify-center">
                <img
                  src="/tennis1.png"
                  alt="力強くガッツポーズする長谷川氏"
                  className="w-full h-auto object-contain drop-shadow-md block"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed text-left flex-1">
                <p>
                  キャリア、年齢、練習時間はハンデとは限りません。
                </p>
                <p className="font-bold text-red-600">
                  あなたが今持っている技術のままでも、「テニスIQ（戦術の設計図）」を手に入れれば、必ずテニスエリートやコーチたちを沼にハメて、試合の主導権を握る側になれます！
                </p>
                <p>
                  私が県大会4連覇を含め44歳から急に勝ち始めた『大人のズルい戦い方』のすべてを、無料動画プログラムと4つの特典に詰め込みました。
                </p>
              </div>
            </div>

            {/* 通常幅のメッセージ */}
            <p className="text-base sm:text-lg text-neutral-900 leading-relaxed text-left">
              少しでも「試合で勝ちたい」「もうカモにされるのはイヤだ」と思われたなら、今すぐメールアドレスを入力して、あなたもテニスIQを手に入れてください。
            </p>

            <div className="border-2 border-black p-5 sm:p-6 bg-[#FFE600] space-y-4 sm:space-y-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black rounded-xl">
              <p className="text-lg sm:text-xl font-bold text-center leading-snug sm:leading-normal">
                ただし、4大特典の無料プレゼントは<br />
                【〇月〇日（◯）】までの期間限定となっております。
              </p>
              <p className="font-medium text-left text-base sm:text-lg leading-relaxed">
                期限を過ぎますと、これらの無料特典は“一切の例外なく”受け取れなくなってしまいますので、必ず今すぐ受け取ってください。
              </p>
            </div>
          </div>

          {/* CTA 3 with prominent rounded border */}
          <div className="border-[3px] sm:border-4 border-black rounded-3xl px-5 sm:px-10 py-7 sm:py-11 bg-white text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[12px] min-[360px]:text-[13.5px] min-[400px]:text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-black mb-8 tracking-tight whitespace-nowrap">
              ＼今すぐ無料動画プログラムと4大特典を受け取る／
            </h2>

            <form onSubmit={(e) => handleSubmit(e, email3, () => setEmail3(''))} className="space-y-4 max-w-lg mx-auto text-left">
              <div>
                <label htmlFor="email3" className="block text-base font-bold text-black mb-2">
                  メールアドレス
                </label>
                <div className="relative">
                  <input
                    id="email3"
                    type="email"
                    required
                    value={email3}
                    onChange={(e) => setEmail3(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3.5 border-2 border-black text-black bg-white focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg placeholder:text-neutral-400"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4.5 sm:py-5.5 px-4 min-[360px]:px-5 sm:px-8 min-h-[64px] sm:min-h-[76px] bg-gradient-to-b from-[#14dc68] via-[#06C755] to-[#04a846] text-white font-black text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-[12.5px] min-[420px]:text-[13.5px] sm:text-[15.5px] md:text-[19px] border-t border-white/35 rounded-2xl shadow-[0_6px_0_0_#038c3c,0_12px_24px_-4px_rgba(6,199,85,0.45)] hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#038c3c,0_16px_28px_-4px_rgba(6,199,85,0.55)] active:translate-y-[4px] active:shadow-[0_2px_0_0_#038c3c,0_4px_10px_0px_rgba(6,199,85,0.4)] transition-all duration-150 cursor-pointer flex items-center justify-center text-center leading-normal whitespace-nowrap overflow-hidden drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] tracking-tighter min-[390px]:tracking-tight sm:tracking-normal"
              >
                <span className="whitespace-nowrap">▶︎今すぐ無料動画プログラムと4大特典を受け取る</span>
              </button>
              <p className="text-xs sm:text-sm text-neutral-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4" />
                完全無料です。登録後すぐに第1回動画と特典をお届けします。
              </p>
            </form>
          </div>
        </div>
      </section>

    </main>

      {/* Footer */}
      <footer className="border-t border-black py-5 sm:py-6 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white">
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="text-white hover:text-neutral-300 hover:underline cursor-pointer"
            >
              プライバシーポリシー
            </button>
            <span className="text-neutral-500">|</span>
            <button 
              onClick={() => setActiveModal('tokusho')} 
              className="text-white hover:text-neutral-300 hover:underline cursor-pointer"
            >
              特定商取引法に基づく表記
            </button>
            <span className="text-neutral-500">|</span>
            <button 
              onClick={() => setActiveModal('terms')} 
              className="text-white hover:text-neutral-300 hover:underline cursor-pointer"
            >
              利用規約
            </button>
            <span className="text-neutral-500">|</span>
            <button 
              onClick={() => setActiveModal('contact')} 
              className="text-white hover:text-neutral-300 hover:underline cursor-pointer"
            >
              お問い合わせ
            </button>
          </div>
          <p className="text-xs text-neutral-400">
            &copy; 大人のテニスIQ戦略 All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white border-2 border-black max-w-md w-full p-6 sm:p-8 space-y-6 text-center relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute right-4 top-4 text-black hover:text-neutral-600 cursor-pointer"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">
                お申し込みを受け付けました
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold text-black">{submittedEmail}</span> 宛に【無料】動画プログラムと4大特典のご案内をお送りいたしました。メールボックスをご確認ください。
              </p>
            </div>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full py-3 bg-black text-white font-bold text-sm hover:bg-neutral-800 cursor-pointer"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* Legal & Info Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white border-2 border-black max-w-xl w-full p-6 sm:p-8 space-y-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 text-black hover:text-neutral-600 cursor-pointer"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>

            {activeModal === 'privacy' && (
              <div className="space-y-4 text-left">
                <h3 className="text-lg font-bold border-b border-black pb-2">プライバシーポリシー</h3>
                <div className="text-xs sm:text-sm text-neutral-800 space-y-3 leading-relaxed">
                  <p>当プログラムは、お客様の個人情報を適切に管理し、漏洩・不正利用の防止に努めます。</p>
                  <p><strong>1. 個人情報の収集・利用目的</strong><br />
                  お預かりしたメールアドレス等の個人情報は、無料動画プログラムおよび関連する特典・メルマガの配信、お問い合わせへの対応にのみ利用いたします。</p>
                  <p><strong>2. 第三者への開示・提供</strong><br />
                  法令に基づき開示することが必要である場合を除き、個人情報を第三者に提供することはありません。</p>
                  <p><strong>3. 配信解除について</strong><br />
                  お届けするメール下部の配信解除リンクより、いつでも容易に配信解除が可能です。</p>
                </div>
              </div>
            )}

            {activeModal === 'tokusho' && (
              <div className="space-y-4 text-left">
                <h3 className="text-lg font-bold border-b border-black pb-2">特定商取引法に基づく表記</h3>
                <div className="text-xs sm:text-sm text-neutral-800 space-y-2 leading-relaxed">
                  <div className="border-b border-neutral-200 py-1.5"><span className="font-bold">運営統括責任者：</span> 長谷川 誠</div>
                  <div className="border-b border-neutral-200 py-1.5"><span className="font-bold">連絡先：</span> contact@hasegawa-office053.com</div>
                  <div className="border-b border-neutral-200 py-1.5"><span className="font-bold">販売価格：</span> 無料（通信費等の実費はお客様負担）</div>
                  <div className="border-b border-neutral-200 py-1.5"><span className="font-bold">引き渡し方法：</span> 登録メールアドレス宛に動画URLおよび特典を送付</div>
                  <div className="py-1.5"><span className="font-bold">表現・再現性に関する注意書き：</span> 本講座に示された表現や再現性には個人差があり、必ずしも効果を保証したものではございません。</div>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-4 text-left">
                <h3 className="text-lg font-bold border-b border-black pb-2">利用規約</h3>
                <div className="text-xs sm:text-sm text-neutral-800 space-y-3 leading-relaxed">
                  <p>本動画プログラムおよび配布特典のコンテンツに関する著作権は運営者に帰属します。</p>
                  <p>無断での転載、再配布、商用利用、公衆送信は固く禁止いたします。</p>
                  <p>利用者は自己の責任において当プログラムをご利用いただくものとします。</p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4 text-left">
                <h3 className="text-lg font-bold border-b border-black pb-2">お問い合わせ</h3>
                <div className="text-xs sm:text-sm text-neutral-800 space-y-3 leading-relaxed">
                  <p>当プログラムや特典に関するご質問・ご要望は、下記メールアドレスまでお問い合わせください。</p>
                  <div className="p-3 bg-neutral-100 border border-neutral-300 font-mono text-center select-all">
                    contact@hasegawa-office053.com
                  </div>
                  <p className="text-neutral-600">※通常、土日祝日を除く2営業日以内にご返信いたします。</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-black text-white font-bold text-sm hover:bg-neutral-800 cursor-pointer"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
