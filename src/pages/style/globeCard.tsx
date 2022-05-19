import { GlobeCard } from "components";
import { handleIcon } from "utils";


const Wrwedoing = () => {
    return (
        <div className="bg-black flex flex-col">
            <div className="mb-[150px] flex flex-row ">

                <GlobeCard
                    headerEl={handleIcon({ icon: 'globe', size: 30 })}
                    title={"Газар дээрх агротехнологийн судалгаа"}
                    desc={"Байгалийн болон бусад нөлөөнүүдийг манай судлаачид болон инженерүүд төслийн талбай дээрээ бие даасан судалгаа хийн ямар төрлийн цөлжилт үйсэж байгааг илрүүлдэг."} />

                <GlobeCard
                    headerEl={handleIcon({ icon: 'globe', size: 30 })}
                    title={"Салбар хоорондын интеграц"}
                    desc={"Манай инженерийн баг одоо усны хэрэглээг, болон усны нөөцийг хэмнэхийн зэрэгцээ төслийн талбайн усжуулалтыг оновчтой болгох ухаалаг автомат усалгааны системийг боловсруулж байна."} />

            </div>
            <div className="mb-[150px] flex flex-row">

                <GlobeCard
                    headerEl={handleIcon({ icon: 'globe', size: 30 })}
                    title={"Цөлжилттэй нутгийн нөхөн сэргээлт // Лэнд Арт"}
                    desc={"Манай төслийн талбайд одоогоор 24,000 боловсорч гүйцсэн хайлаас модыг дэд бүтцээс алслагдмал газар тогтвортой хөгжлийн хүрээнд асран хамгаалж амжилттай ургуулж байна. Бид модны ургах чадамжийг алдагдуулахгүйгээр модыг Лэнд Арт урлагийн хэлбэрт оруулан олон нийтийндэмжлэг сонирхлыг татдаг."} />

                <GlobeCard
                    headerEl={handleIcon({ icon: 'globe', size: 30 })}
                    title={"Органик Маркетинг"}
                    desc={"Манай үйлчлүүлэгчид болон дагагчид маань түнш байгууллагуудын бүтээгдэхүүн, үйлчилгээг зах зээлд танигдан нэвтрэхэд үр дүнтэй хэрэгсэл болдог. Бид Лэнд Арт урлагийг уялдуулан Монголын газар нутгийн цөлжилтийн асуудлыг шийдвэрлэхэд хамтран ажиллаж буй түншүүдийнхээ хамтын хүчин чармайлтыг харуулсан маркетингийн кампанит ажлыг амжилттай зохион байгуулж байсан."} />

            </div>
        </div >
    )
}
export default Wrwedoing
