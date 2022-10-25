import { SyntheticEvent, useState } from "react";
import "./style.css";

type User = {
    name: string;
    password: string;
    repeatPassword: string;
    accountType: string;
};

export function Access() {
    const user: User = {
        name: "",
        password: "",
        repeatPassword: "",
        accountType: "",
    };

    const [access, setAccess] = useState(user);

    const handlerSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    const handleAccess = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAccess({
            ...access,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
    };

    return (
        <form onSubmit={handlerSubmit}>
            <legend>Acceso</legend>
            <div>
                <input
                    type="text"
                    name="name"
                    value={access.name}
                    onInput={handleAccess}
                    placeholder="Nombre de usuario"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={access.name}
                    onInput={handleAccess}
                    placeholder="Contraseña"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={access.name}
                    onInput={handleAccess}
                    placeholder="Repetir contraseña"
                />
            </div>
            <div>
                <select name="accountType">
                    <option value="" selected disabled>
                        Tipo de cuenta
                    </option>
                    <option value="">Personal</option>
                    <option value="">Pro</option>
                    <option value="">Business</option>
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
