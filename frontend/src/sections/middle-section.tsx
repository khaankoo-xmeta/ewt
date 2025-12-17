import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const MiddleSection = () => {
  return (
    <div className="container py-20 px-5 bg-blue-300">
      <h1 className="text-2xl font-normal text-center text-gray-600">
        Захиалсан бараагаа хүлээн авах хамгийн зөв сонголт
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <Card className="bg-white p-7 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-5">
              <AlertTriangle width={60} height={60} enableBackground="yellow" />
              <h2 className="text-xl font-semibold mb-3">Мэдээлэл</h2>
            </div>
            <p className="text-gray-500 mt-1">
              📦 Ачаа тээврийн тариф 🔹 Жижиг хэмжээний ачаа Ээмэг, зүүлт, бөгж,
              кэйс гэх мэт ➡️ 300₮ – 1500₮ 🔹 Дундаж хэмжээний ачаа Өмд, цамц,
              подволк зэрэг ойролцоо хэмжээтэй бараа ➡️ 1500₮ – 3000₮ 🔹 Том
              хэмжээний ачаа Хайрцагтай гутал, цүнх зэрэг ➡️ 3500₮-с эхэлнэ 🔹
              Зузаан хувцас, гадуур хувцас Куртик, гадуур хувцас, зузаан цамц
              гэх мэт ➡️ 4000₮ – 7000₮ 🔹 Том овортой ачаа (МК) ➡️ 700¥ – 750¥
              🔹 Овор багатай хүнд жинтэй ачаа 1 кг — 2000₮ 📞 Холбогдох утас:
              ☎️ 88212494 ☎️96413355
            </p>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-5">
              <AlertTriangle width={60} height={60} enableBackground="yellow" />
              <h2 className="text-xl font-semibold mb-3">Анхааруулга</h2>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 mt-1">
                🚛 Тээвэрлэлтийн явцад амархан гэмтэх, хэврэг, эвдрэлд өртөх
                өндөр эрсдэлтэй бараа, бүтээгдэхүүнийг бат бөх, найдвартай сав
                баглаа боодолгүйгээр захиалахгүй байхыг зөвлөж байна.
              </p>
              <p className="text-gray-500 mt-1">
                🚛 Иймд тээвэрлэлтийн явцад гэмтэл, эвдрэл гарсан тохиолдолд
                карго компани хариуцлага хүлээхгүй болохыг анхаарна уу.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
