import Image from "next/image";
import Dummy from "../../public/image/dummy.png";

export default function Content() {
  return (
    <div className="py-8 px-12 h-screen">
      <p className="text-center">ini Content</p>
      <Image src={Dummy} />
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacinia
        dolor. Aenean condimentum, velit at pellentesque suscipit, lectus metus
        luctus mi, et fermentum nulla nisl at neque. Vestibulum ut odio eu metus
        venenatis ultrices. Vivamus at sem in orci aliquet auctor. Nullam dictum
        scelerisque felis, nec fermentum dolor euismod sit amet. Fusce congue
        neque nunc, id interdum nisl lacinia at. Phasellus accumsan libero vel
        nunc elementum tincidunt. Integer volutpat leo quis lectus scelerisque,
        sit amet volutpat lectus egestas. Sed suscipit ex nec enim faucibus
        congue. Nunc auctor turpis at purus eleifend, eget cursus nisi aliquet.
        Curabitur mollis, nunc ut ullamcorper pulvinar, felis neque vehicula
        dolor, vel lobortis erat neque non nisl. Cras nec purus vel nulla
        fringilla cursus. Sed at odio eget tortor efficitur mattis. Donec non
        justo ut tellus cursus laoreet. Suspendisse eu nulla ut libero tincidunt
        gravida non eget mauris. Vivamus nec aliquam sapien, id elementum
        tellus. Nullam at fermentum dui. Sed viverra vestibulum elit, a volutpat
        ligula euismod nec. Sed condimentum erat ut felis malesuada vestibulum.
        Aliquam sed quam vel justo iaculis varius. Curabitur id congue enim.
        Suspendisse fringilla, sapien eu facilisis ultrices, nunc risus luctus
        libero, nec mollis lectus justo in ante. Vestibulum auctor euismod nunc
        in convallis. Suspendisse potenti. Nullam varius augue eu libero
        tristique convallis. Donec lacinia sapien vel nunc pellentesque, quis
        scelerisque metus gravida. Praesent at dui nec dolor tincidunt tempor id
        in enim. Aenean ut est eget ante blandit vulputate a sit amet eros. Nunc
        commodo, ex ut faucibus lacinia, metus libero vestibulum neque, vel
        volutpat tellus velit nec est. Aenean aliquet, turpis sed volutpat
        gravida, odio velit scelerisque tellus, at vestibulum metus lorem sit
        amet leo. Fusce vitae lectus vitae elit fringilla elementum eu ut dui.
        Maecenas vestibulum eros sit amet sem cursus, non aliquet felis varius.
        Integer at quam a enim tincidunt sodales. Sed et turpis in lorem finibus
        bibendum. Donec luctus mi a quam sollicitudin, quis ultricies eros
        elementum. Morbi vel mi nec velit mattis ultrices. Vivamus eu sem sit
        amet libero sodales malesuada ac in mi. Nulla nec risus nec mi mattis
        hendrerit id a elit. Curabitur id quam vel purus dapibus scelerisque.
      </p>
    </div>
  );
}
