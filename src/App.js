import './App.css';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <Navbar />
      </nav>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <Header />
      </div>
      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <BlogList />
      </section>
      <section className="pt-6">
        <Footer />
      </section>
    </>
  );
}

export default App;
