import Header from "./Header";
import Footer from "./Footer";
import PostIndex from './PostIndex';

const layoutStyle = {
    margin: 20,
    padding: 20
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <main>
            <section>
                {props.children}
            </section>
            <aside>
                <PostIndex/>
            </aside>
        </main>
        <Footer />
    </div>
);

export default Layout;
