import React from 'react'
import Navbar from './Navbar'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
export default function Landing() {
    return (
        <div>
            <Navbar/>
            <div className = "container">
            <FadeInSection>
            <h1>Hello Wolrd</h1>
            </FadeInSection>
            </div>
        </div>
    )
}
