* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.logo {
    font-size: 1.5rem;
    font-weight: bold;
}


.menuMobile {
    list-style: none;
    display: flex;
    gap: 0.5rem;
}

.menuMobile a {
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
}

.btn-menu {
    display: none;
}

/* RESOLUÇÃO 1040PX */
@media (max-width: 1040px) {
    .menuMobile {
        display: block;
        position: absolute;
        top: 4.6875rem;
        left: 0;
        background: var(--important-color);
        text-align: center;
        width: 100%;
        height: 0;
        z-index: 1;
        visibility: hidden;
        overflow-y: hidden;
        transition: 0.5s;
    }

    .menuMobile a {
        padding: 1rem 0;
        margin-inline: 1rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.16);
        border-radius: 0;
    }

    .btn-menu {
        background: none;
        border: none;
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--white);
        padding: 1rem 0;
        cursor: pointer;
        margin-left: 20rem;
    }

    .hamburger {
        border-top: 0.125rem solid;
        width: 1.25rem;
    }

    .hamburger::after,
    .hamburger::before {
        content: " ";
        display: block;
        width: 1.25rem;
        height: 0.125rem;
        background: currentColor;
        margin-top: 0.3125rem;
        position: relative;
        transition: 0.3s;
    }

    .nav.active .menuMobile {
        height: calc(100vh - 4.6875rem);
        visibility: visible;
        overflow-y: auto;
    }

    .nav.active .hamburger {
        border-top-color: transparent;
    }

    .nav.active .hamburger::before {
        transform: rotate(135deg);
    }

    .nav.active .hamburger::after {
        transform: rotate(-135deg);
        top: -0.4375rem;
    }
}

/* RESOLUÇÃO 600PX */
@media (max-width: 600px) {
    .menuMobile {
        display: block;
        position: absolute;
        top: 4.6875rem;
        left: 0;
        background: var(--important-color);
        text-align: center;
        width: 100%;
        height: 0;
        z-index: 1;
        visibility: hidden;
        overflow-y: hidden;
        transition: 0.5s;
    }

    .menu div {
        display: flex;
        width: 40%;

    }

    .menuMobile a {
        padding: 1rem 0;
        margin-inline: 1rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.16);
        border-radius: 0;
    }

    .btn-menu {
        background: none;
        border: none;
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--white);
        padding: 1rem 0;
        cursor: pointer;
        margin: 0;
    }

    .hamburger {
        border-top: 0.125rem solid;
        width: 1.25rem;
    }

    .hamburger::after,
    .hamburger::before {
        content: " ";
        display: block;
        width: 1.25rem;
        height: 0.125rem;
        background: currentColor;
        margin-top: 0.3125rem;
        position: relative;
        transition: 0.3s;
    }

    .nav.active .menuMobile {
        height: calc(100vh - 4.6875rem);
        visibility: visible;
        overflow-y: auto;
    }

    .nav.active .hamburger {
        border-top-color: transparent;
    }

    .nav.active .hamburger::before {
        transform: rotate(135deg);
    }

    .nav.active .hamburger::after {
        transform: rotate(-135deg);
        top: -0.4375rem;
    }
}

/* RESOLUÇÃO DE 500PX */
@media (max-width: 500px) {

    .btn-menu {
        background: none;
        border: none;
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--white);
        padding: 1rem 0;
        cursor: pointer;
        line-height: 0;
        margin: 0;
    }

    .menu div {
        display: flex;
        width: 30%;

    }
}

/* RESOLUÇÃO 320PX */
@media (max-width: 320px) {


    .menu div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35%;

    }

}