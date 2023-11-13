import Header from "../layouts/Header";
import SearchBanner from "../layouts/SearchBanner";
import Slogan from "../layouts/Slogan";
import Catalog from "../layouts/Catalog";
import NewPost from "../layouts/NewPost";
import Feature from "../layouts/Feature";
import NoiBatPost from "../layouts/NoiBatPost";

const Home = () => {
  return (
    <>
      <Header></Header>
      <SearchBanner></SearchBanner>
      <Slogan></Slogan>
      <Catalog></Catalog>
      <NewPost></NewPost>
      <Feature></Feature>
      <NoiBatPost />
    </>
  );
};

export default Home;
