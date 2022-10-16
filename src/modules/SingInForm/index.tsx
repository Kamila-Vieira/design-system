import { FormEvent } from "react";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

export function SingInForm() {
  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10"
    >
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold">Endereço de e-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input name="email" id="email" type="email" placeholder="jhondoe@exemple.com" />
        </TextInput.Root>
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <Text className="font-semibold">Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input
            name="password"
            id="password"
            type="password"
            placeholder="************"
          />
        </TextInput.Root>
      </label>

      <Text asChild size="sm">
        <label htmlFor="remember" className="flex items-center gap-2 text-gray-200">
          <Checkbox id="remember" name="remember" />
          Lembrar de mim por 30 dias
        </label>
      </Text>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>
  );
}
