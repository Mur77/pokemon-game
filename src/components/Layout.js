import s from './Layout.module.css';

export const Layout = ({ title, descr, urlBg = null, colorBg = null, children }) => {
    const inlineStyle = {};
    if (urlBg) {
        inlineStyle.backgroundImage = `url(${urlBg})`
    }
    if (colorBg) {
        inlineStyle.backgroundColor = colorBg
    }

    return (
        <section style={inlineStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{ title }</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc + ' ' + s.full}>
                        { children }
                        <p>{ descr }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
