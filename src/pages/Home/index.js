import { languages } from '~/component/Languages';

function Home() {
    return (
        <div>
            <h2>Home page</h2>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>{language.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
