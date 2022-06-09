import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function Contact({}) {
	return (
		<section className="flex h-screen overflow-hidden contact-section" id="contact">
			<div className="bg-primary h-screen w-[50vw] shrink-0 relative z-10 justify-center flex items-center">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">CONTACT</div>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="w-[50vw] bg-white p-[96px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac suscipit diam. Aliquam nec tellus dui. Donec non lorem a ligula dapibus accumsan in in nisi. Nam cursus tellus ut eros sagittis ultrices. Vivamus aliquet quam ac turpis tempor hendrerit. Morbi lacus purus, interdum quis porta a, volutpat quis nunc. Cras ex orci, placerat eget faucibus id, eleifend eget eros. Ut dignissim, lorem aliquam bibendum porttitor, eros ipsum consequat tellus, nec blandit erat neque et mauris. Fusce non ex sed nisl ornare eleifend quis malesuada metus.
				Quisque laoreet vel lectus quis lobortis. Morbi auctor lacus quis mauris eleifend luctus. Aliquam porttitor nisi sit amet faucibus mattis. Vestibulum eu ultricies nisl. Suspendisse diam nunc, tempor ut magna eu, rhoncus ornare diam. Quisque lobortis metus eu mi rhoncus, at ultrices justo porttitor. Vestibulum vulputate, augue at rhoncus malesuada, justo orci sollicitudin magna, id scelerisque erat enim vel sem. Morbi lobortis et odio quis dignissim. Pellentesque in consequat nibh, congue tempor lacus. Praesent tempor justo lacus, sed cursus felis vehicula ac. Integer volutpat nisi non odio malesuada, non dignissim metus vestibulum. Quisque quis arcu posuere, mattis mauris et, congue nibh. Pellentesque scelerisque et odio eget condimentum.
				Quisque purus nibh, aliquet a euismod vel, cursus feugiat magna. Suspendisse at libero non nulla ornare tincidunt sit amet vitae metus. Aenean sollicitudin facilisis interdum. Pellentesque mi ante, vestibulum nec rhoncus vitae, mollis non mi. Etiam tortor nisl, feugiat vel risus et, molestie facilisis nisi. Maecenas eget nulla a massa faucibus molestie. Proin ac elit in metus rutrum vulputate nec et mauris. Aliquam dolor urna, porttitor at lorem in, vestibulum fermentum libero. Aenean a suscipit leo. Morbi convallis interdum diam, tempus auctor sem aliquet at. Nullam lacinia non felis vel rhoncus. Sed tristique lectus sapien, id placerat ligula cursus in.
				Aliquam mi felis, tempus vel lorem vel, bibendum dictum ipsum. Vivamus nec facilisis ligula. Praesent facilisis neque eu augue varius facilisis. Nunc risus lorem, fermentum iaculis diam id, faucibus efficitur augue. Sed eu orci nisl. Nam consectetur tincidunt tristique. Nullam sagittis convallis magna a mattis. Aliquam erat volutpat. Vivamus dictum tortor id consequat euismod.
				Suspendisse potenti.
			</div>
		</section>
	);
}

export default Contact;