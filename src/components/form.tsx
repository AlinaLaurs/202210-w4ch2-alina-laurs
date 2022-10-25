import { SyntheticEvent, useState } from "react";
import "./style.css";

type User = {
    name: string;
    lastName: string;
    birthDate: number;
    gender: string;
    email: string;
    newsletter: boolean;
};

export function Form() {
    const user: User = {
        name: "",
        lastName: "",
        birthDate: 0,
        gender: "",
        email: "",
        newsletter: false,
    };

    const [form, setForm] = useState(user);

    const handlerSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
    };

    return (
        <form onSubmit={handlerSubmit}>
            <legend>Formulario</legend>
            <div>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onInput={handleForm}
                    placeholder="Dime tu nombre"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onInput={handleForm}
                    placeholder="Dime tu apellido"
                />
            </div>
            <div>
                <input
                    type="date"
                    name="birthDate"
                    value={form.birthDate}
                    onInput={handleForm}
                    placeholder="Dime tu fecha de nacimiento"
                />
            </div>
            <div>
                <input
                    type="radio"
                    name="gender"
                    value=""
                    onInput={handleForm}
                    placeholder="Dime tu género"
                />
                Masculino
            </div>
            <div>
                <input
                    type="radio"
                    name="gender"
                    value=""
                    onInput={handleForm}
                    placeholder="Dime tu género"
                />
                Femenino
            </div>
            <div>
                <input
                    type="radio"
                    name="gender"
                    value=""
                    onInput={handleForm}
                    placeholder="Dime tu género"
                />
                Otro
            </div>
            <div>
                <input
                    type="radio"
                    name="gender"
                    value=""
                    onInput={handleForm}
                    placeholder="Dime tu género"
                />
                Prefiero no mencionarlo
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onInput={handleForm}
                    placeholder="Dime tu email"
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleForm}
                    />
                    Deseo recibir información de la newsletter
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
