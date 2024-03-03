
import input from "@/components/input";
import Propes from "@/components/Propes";
import Cover from "./component/Cover";
import Promotions from "./component/Promotions";
import Products from "./component/Products";
import Unique from "./component/Unique";
import Newsletter from "./component/Newsletter";
export default function Home() {
  return (
  
<div className="min-h-screen mt-10">
  <div><Cover/></div>
  <div><Promotions/></div>
  <div><Products/></div>
  <div><Unique/></div>
  <div><Newsletter/></div>
</div>

  );
}