
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function BasicLayout(props: any) {
    const { children } = props;
    return (
        <>
            <Header></Header>
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

export default BasicLayout;
