import { useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GreenLogo } from "../components/AssetsTsx/GreenLogo";
import { Mockup } from "../components/AssetsTsx/Mockup";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Susbcribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="mt-20 w-full max-w-[1100px] flex items-center justify-between">
        <div className="max-w-[640px]">
          <GreenLogo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong> JS
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-3 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 rounded uppercase py-4 font-bold text-sm 
              hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <Mockup />
    </div>
  );
}
