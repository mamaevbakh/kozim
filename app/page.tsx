import Link from "next/link";
import { ArrowRight, FileText, MapPinned, TriangleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const STATS = [
  { label: "Ҳудудлар", value: "14", note: "+ УМУМИЙ" },
  { label: "Саволлар", value: "41", note: "6 блок" },
  { label: "Жавоб варианти", value: "328", note: "икки йил кесимида" },
  { label: "Қиёсий қаторлар", value: "4 919", note: "ҳудуд даражаси" },
] as const;

const FINDINGS = [
  {
    code: "Q15",
    title: "«Энг ибратли сиймо»",
    body:
      "«Маънавият соҳасида бирорта ибрат бўлувчи сиймо йўқ» — республика бўйлаб 20,9% дан 37,4% га ўсди. Шу билан бирга анъанавий сиймолар улуши 40,2% дан 26,9% га тушди.",
    p24: "20,9%",
    p25: "37,4%",
    delta: "+16,5 п.п.",
    h: "h = +0,37",
    direction: "up" as const,
  },
  {
    code: "Q6",
    title: "«Ўзбекистонда қолардим»",
    body:
      "Ватанда қолиш истагини билдирганлар улуши 40,4% дан 31,6% га тушди. Кичик-ўрта таъсир, лекин республика миқёсида барқарор тренд.",
    p24: "40,4%",
    p25: "31,6%",
    delta: "−8,8 п.п.",
    h: "h = −0,18",
    direction: "down" as const,
  },
  {
    code: "Q15",
    title: "Бухоро вилояти — DQ огоҳлантириши",
    body:
      "«Сиймо йўқ» жавоби 16,0% дан 67,6% га чиққан. Аммо туман даражасида намуна 8–81 мартагача кенгайган — натижа ижтимоий ўзгаришдан кўра намуна тузилмасининг ўзгариши билан изоҳланади.",
    p24: "16,0%",
    p25: "67,6%",
    delta: "+51,6 п.п.",
    h: "DQ шубҳа",
    direction: "warn" as const,
  },
] as const;

const PHASES = [
  {
    n: "Фаза 1",
    title: "Хом маълумот",
    body: "150 000+ ёзув — 41 савол × 328 вариант × икки йил.",
    done: true,
  },
  {
    n: "Фаза 2",
    title: "Ҳудудий ва туман қиёси",
    body: "4 919 ҳудуд-қатор + 57 401 туман-қатор Коэн h билан.",
    done: true,
  },
  {
    n: "Фаза 3",
    title: "Мавзуий индекслар",
    body: "Ватанпарварлик, ислоҳот кайфияти, диний-маърифий ҳолат — режада.",
    done: false,
  },
  {
    n: "Фаза 4",
    title: "Туман даражасидаги GeoJSON",
    body: "230 туман-номини Кирилл↔Лотин билан боғлаш ва харитага туширилиши.",
    done: false,
  },
] as const;

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-lg font-bold tracking-tight">
              Ижтимоий сўровнома
            </span>
            <span className="font-serif text-sm italic text-muted-foreground">
              2024–2025
            </span>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#findings">Топилмалар</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#methodology">Методология</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/dashboard">
                Дашборд
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-sm bg-chip">
              Фаза 1 + Фаза 2
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              14 ҳудуд · 216 туман
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              Ўзбек Кирилл
            </Badge>
          </div>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Жамият ижтимоий-маънавий
            <br />
            ҳолатининг қиёсий таҳлили
          </h1>
          <p className="max-w-3xl font-serif text-xl italic text-muted-foreground">
            2024 ва 2025 йилларда ўтказилган сўровнома натижалари. Республика,
            ҳудуд ва туман даражаларида силжишлар, Коэн h таъсир миқдори ва
            маълумотлар сифати фильтрлари билан.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Интерактив дашбордни кўриш
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#findings">Асосий топилмалар</Link>
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 bg-card p-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                {s.label}
              </span>
              <span className="tabular font-serif text-4xl font-bold text-foreground">
                {s.value}
              </span>
              <span className="text-xs italic text-muted-foreground">
                {s.note}
              </span>
            </div>
          ))}
        </section>

        <section id="findings" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Асосий топилмалар
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Республика миқёсидаги силжишлар
            </h2>
            <p className="max-w-2xl font-serif italic text-muted-foreground">
              Коэн h бўйича энг кўзга кўринган ўзгаришлар. Тўлиқ рўйхат
              дашбордда — 41 савол × 14 ҳудуд кесимида.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FINDINGS.map((f, i) => (
              <Card key={i} className="rounded-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="rounded-sm font-mono text-[11px]"
                    >
                      {f.code}
                    </Badge>
                    {f.direction === "warn" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-warm">
                        <TriangleAlert className="size-3.5" />
                        DQ
                      </span>
                    ) : null}
                  </div>
                  <CardTitle className="font-serif text-lg leading-snug">
                    {f.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {f.body}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-end gap-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                      2024
                    </span>
                    <span className="tabular font-serif text-xl font-bold text-muted-foreground">
                      {f.p24}
                    </span>
                  </div>
                  <ArrowRight className="mb-1 size-4 text-muted-foreground" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                      2025
                    </span>
                    <span className="tabular font-serif text-xl font-bold text-foreground">
                      {f.p25}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span
                    className={
                      f.direction === "up"
                        ? "tabular font-bold text-primary"
                        : "tabular font-bold text-warm"
                    }
                  >
                    {f.delta}
                  </span>
                  <span className="tabular text-xs italic text-muted-foreground">
                    {f.h}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Лойиҳа ҳақида
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Маълумот кўлами ва ёндашув
            </h2>
            <div className="flex flex-col gap-4 font-serif text-base leading-relaxed text-foreground">
              <p>
                Ушбу таҳлил Маънавият ва маърифат маркази учун тайёрланган.
                2024–2025 сўровнома натижаларини республика, 14 ҳудуд ва 216
                туман кесимида солиштиради. Силжишлар фоиз пунктлари ва Коэн h
                таъсир миқдори орқали ҳисобланади.
              </p>
              <p className="text-muted-foreground">
                Туман даражасидаги 57 401 қиёсий қатордан 14 646 таси DQ
                фильтрларидан ўтган: ҳар йили N ≥ 100, намуна нисбати 0,5–2,0,
                улуш 0–100 оралиғида. Қолганлари дашбордда курсив билан
                кўрсатилади.
              </p>
            </div>
          </div>

          <Card id="methodology" className="rounded-sm border-warm/50 bg-chip">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TriangleAlert className="size-4 text-warm" />
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-warm">
                  Маълумотлар сифати
                </span>
              </div>
              <CardTitle className="font-serif text-lg leading-snug">
                Намуна тузилмасининг ўзгариши
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm leading-relaxed text-foreground">
              <p>
                Айрим ҳудудларда 2024 ва 2025 йил намуналари ҳажм жиҳатидан
                8–81 марта фарқ қилади. Бундай ҳолда «0 → 100%» кўринишидаги
                силжишлар реал ижтимоий ўзгаришни эмас, методик фарқни акс
                эттиради.
              </p>
              <Separator className="bg-warm/20" />
              <p className="text-muted-foreground">
                Шу сабабли Бухоро Q15, Жиззах ш. Q24 каби натижалар DQ
                флагларида кўрсатилади ва тегишли координаторлар билан
                текширилиши керак.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Йўл харитаси
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Фазалар
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {PHASES.map((p) => (
              <div
                key={p.n}
                className="flex flex-col gap-2 border-l-2 border-border pl-4"
              >
                <span className="font-serif text-xs italic text-muted-foreground">
                  {p.n}
                </span>
                <h3 className="font-serif text-base font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                {p.done ? (
                  <Badge
                    variant="secondary"
                    className="mt-1 w-fit rounded-sm bg-chip"
                  >
                    Тайёр
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-1 w-fit rounded-sm">
                    Режада
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-sm border border-border bg-card p-10">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Қўшимча манбалар
            </span>
            <h2 className="font-serif text-2xl font-bold tracking-tight">
              Excel, SQLite, Word ҳужжатлар
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <FileText className="size-5 text-primary" />
              <h3 className="font-serif text-base font-bold">
                Ижтимоий_сўровнома_2024_2025_таҳлил.xlsx
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                6 варақ: кириш, умумий хулоса, асосий ўзгаришлар, тўлиқ
                маълумот, маълумотлар сифати, туманлар кесимида.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <FileText className="size-5 text-primary" />
              <h3 className="font-serif text-base font-bold">
                survey.db (SQLite)
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                4 жадвал: questions, options, responses, comparison. Python /
                pandas ёки DB Browser билан очилади.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <MapPinned className="size-5 text-primary" />
              <h3 className="font-serif text-base font-bold">
                15 та ҳудудий ҳисобот
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ҳар бир ҳудуд учун Word ҳужжат: ТОП-8 силжиш, блок таҳлили,
                туман кесимида силжишлар.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-sm font-bold">
              Ижтимоий сўровнома · 2024–2025
            </span>
            <span className="text-xs italic text-muted-foreground">
              Маънавият ва маърифат маркази учун қиёсий таҳлил
            </span>
          </div>
          <span className="tabular text-xs text-muted-foreground">
            Ўзбекистон · 14 ҳудуд · 216 туман
          </span>
        </div>
      </footer>
    </div>
  );
}
