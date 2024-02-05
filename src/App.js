import React, { useState } from "react";
export default function Registration() {
    const initialFormData = {
        fullName: "",
        age: "",
        email: "",
        phoneNumber: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [submittedData, setSubmittedData] = useState(null);
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData(formData);
    }
    function handleReset() {
        setFormData(initialFormData);
        setSubmittedData(null);
    }
    function handleSubmit(e) {
        e.preventDefault();

        // Проверка на соответствие номера телефона заданным шаблонам
        const phoneRegex = /^(|996)\d{9}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            alert ("Введите коректный номер телефона , пример : 996555666888");
            return;
        }
        setSubmittedData(formData)
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                ФИО:{" "}
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </label>
            <hr/>
            <label>
                Возраст:{" "}
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>
            <hr/>
            <label>
                Электронная почта:{" "}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <hr/>
            <label>
                Номер телефона:{" "}
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </label>
            <hr/>
            <p>черный фон, что бы глаза не напригались ;)</p>
            <button type="reset" onClick={handleReset}>
                Сбросить форму
            </button>
            <button type="submit">Отправить</button>
            {submittedData && (
                <div>
                    <strong>Данные real time:</strong>
                    <p>ФИО: {submittedData.fullName}</p>
                    <p>Возраст: {submittedData.age}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Номер телефона: {submittedData.phoneNumber}</p>
                </div>
            )}
        </form>
    );
}