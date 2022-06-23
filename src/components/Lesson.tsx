import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import prBR from "date-fns/locale/pt-BR";
import { Link, useLocation } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { pathname } = useLocation();
  const isLessonSelected = pathname.includes(props.slug);

  console.log(isLessonSelected);

  const isLessonAvaivble = isPast(props.availableAt);
  const avaibleDateFormat = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: prBR,
    }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{avaibleDateFormat}</span>
      <div
        className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500
      transition-colors"
      >
        <header className="flex items-center justify-between">
          {isLessonAvaivble ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-1">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[2px] px-2 text-white border-green-300 border font-bold">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
