import React from 'react';
import HeaderBlock from "./components/HeaderBlock";

const App = () => {
    return (
        <>
            <HeaderBlock
                title="Учите слова онлайн"
                descr="Используйте карточками для запоминания и пополнения активныйх словарных запасов"
            />
            <HeaderBlock
                title="Нам нравиться это"
                hideBackground
            />
        </>
    );
}

export default App;
