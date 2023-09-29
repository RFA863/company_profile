import ContentModel from "./ContentModel";
import ContentUkuran from "./ContentUkuran";
import ContentMaterial from "./ContentMaterial";

export default function Content({
  menu,
  setMenu,
  model,
  setModel,
  dimension,
  setDimension,
  material,
  setMaterial,
}) {
  return (
    <div className="p-6 bg-[#D9D9D9] w-[1000px]">
      {menu === "MODEL" && (
        <ContentModel
          nextHandler={() => setMenu("UKURAN")}
          model={model}
          setModel={setModel}
        />
      )}
      {menu === "UKURAN" && (
        <ContentUkuran
          nextHandler={() => setMenu("MATERIAL")}
          dimension={dimension}
          setDimension={setDimension}
        />
      )}
      {menu === "MATERIAL" && (
        <ContentMaterial
          text={"Text"}
          text2={"Text"}
          material={material}
          setMaterial={setMaterial}
        />
      )}
    </div>
  );
}
