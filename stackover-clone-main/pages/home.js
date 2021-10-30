/* Home Page deneme  */
import Layout from '../components/layout';
import CreateQuestion from '../components/homepage/CreateQuestion/CreateQuestion';
import PopularTags from '../components/homepage/PopularTags/PopulerTags';
export default function HomePage() {
  return (
    <Layout>
      <CreateQuestion />
      <PopularTags />
    </Layout>
  );
}
