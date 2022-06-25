import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import prBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormat = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: prBR,
    }
  );

  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = props.slug === slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormat}</span>
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          { "bg-green-500 linkActive": isActiveLesson },
          { "cursor-not-allowed": !isLessonAvailable }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-1",
                { "text-white": isActiveLesson }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[2px] px-2 text-white border-green-300 border font-bold",
              { "border-white": isActiveLesson }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("text-gray-200 mt-5 block", {
            "text-slate-50": isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
