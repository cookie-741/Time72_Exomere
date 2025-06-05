import InputFormComponent from "@/components/info/InputFormComponent";
import ImageHeaderComponent from "@/components/info/ImageHeaderComponent";
import Layout from "@/layouts/Layout";
import CheckboxComponent from "@/components/info/CheckboxComponent";
import ButtonComponent from "@/components/info/ButtonComponent";
import SizeBox from "@/components/app/SizeBox";
const ProductInfo = () => {
  return (
    <Layout h="150px">
      <ImageHeaderComponent />
      <SizeBox h={136} />
      <div className="flex items-center justify-center">
        <form className="w-1/2 2xl:w-2/5">
          <InputFormComponent placeholder="お客様" />
          <SizeBox h={28} />
          <InputFormComponent placeholder="フリガナ" />
          <SizeBox h={28} />
          <CheckboxComponent />
          <SizeBox h={28} />
          <InputFormComponent placeholder="会社名・サロン名" />
          <SizeBox h={28} />
          <InputFormComponent placeholder="メルアドレス" />
          <SizeBox h={28} />
          <InputFormComponent placeholder="電話番号(ハイフンなし)" />
          <SizeBox h={28} />
          <InputFormComponent placeholder="住所" />
          <SizeBox h={28} />
          <textarea
            className="px-5 py-2 w-full h-64  bg-gray-100 focus:outline-none resize-none"
            placeholder="お問い合わせ内容"
          ></textarea>
          <SizeBox h={28} />
          <div className="flex items-center ml-3">
            <input
              id="checkbox"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 ml-15"
            />
            <label htmlFor="checkbox" className="ml-2 text-gray-700">
              個人情報の取り扱いに同意する
            </label>
          </div>
          <SizeBox h={28} />
          <ButtonComponent />
          <SizeBox h={300} />
        </form>
      </div>
    </Layout>
  );
};
export default ProductInfo;
