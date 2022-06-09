import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

import Menu from '../ui/menu';

function About({}) {
	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.article',
				scrub: 0.5,
				start: 'top top',
				pin: '.about-section',
			}
		}).to('.article', {
			y: "-=50%"
		});
	}, []);

	return (
		<section className="flex h-screen overflow-hidden about-section" id="about">
			<div className="bg-primary h-screen w-[50vw] shrink-0 relative z-10 justify-center flex items-center">
				<div className="font-[LemonMilk] text-white text-5xl tracking-wider">ABOUT</div>
				<svg viewBox="0 0 512 512" width="130" height="130" className="absolute right-[-65px] top-[96px]">
					<clipPath id="hexagon">
						<path id="heart" d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
						c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
						c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"/>
					</clipPath>

					<image href="https://avatars.githubusercontent.com/u/16413368" width="100%" height="100%" clipPath="url(#hexagon)" />
				</svg>

				<div className="absolute bottom-0 left-0 right-0 flex justify-center">
					<Menu theme="white" />
				</div>
			</div>
			<div className="h-[200vh] w-[50vw] article bg-white p-[96px]" id="about-right">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac suscipit diam. Aliquam nec tellus dui. Donec non lorem a ligula dapibus accumsan in in nisi. Nam cursus tellus ut eros sagittis ultrices. Vivamus aliquet quam ac turpis tempor hendrerit. Morbi lacus purus, interdum quis porta a, volutpat quis nunc. Cras ex orci, placerat eget faucibus id, eleifend eget eros. Ut dignissim, lorem aliquam bibendum porttitor, eros ipsum consequat tellus, nec blandit erat neque et mauris. Fusce non ex sed nisl ornare eleifend quis malesuada metus.
				Quisque laoreet vel lectus quis lobortis. Morbi auctor lacus quis mauris eleifend luctus. Aliquam porttitor nisi sit amet faucibus mattis. Vestibulum eu ultricies nisl. Suspendisse diam nunc, tempor ut magna eu, rhoncus ornare diam. Quisque lobortis metus eu mi rhoncus, at ultrices justo porttitor. Vestibulum vulputate, augue at rhoncus malesuada, justo orci sollicitudin magna, id scelerisque erat enim vel sem. Morbi lobortis et odio quis dignissim. Pellentesque in consequat nibh, congue tempor lacus. Praesent tempor justo lacus, sed cursus felis vehicula ac. Integer volutpat nisi non odio malesuada, non dignissim metus vestibulum. Quisque quis arcu posuere, mattis mauris et, congue nibh. Pellentesque scelerisque et odio eget condimentum.
				Quisque purus nibh, aliquet a euismod vel, cursus feugiat magna. Suspendisse at libero non nulla ornare tincidunt sit amet vitae metus. Aenean sollicitudin facilisis interdum. Pellentesque mi ante, vestibulum nec rhoncus vitae, mollis non mi. Etiam tortor nisl, feugiat vel risus et, molestie facilisis nisi. Maecenas eget nulla a massa faucibus molestie. Proin ac elit in metus rutrum vulputate nec et mauris. Aliquam dolor urna, porttitor at lorem in, vestibulum fermentum libero. Aenean a suscipit leo. Morbi convallis interdum diam, tempus auctor sem aliquet at. Nullam lacinia non felis vel rhoncus. Sed tristique lectus sapien, id placerat ligula cursus in.
				Aliquam mi felis, tempus vel lorem vel, bibendum dictum ipsum. Vivamus nec facilisis ligula. Praesent facilisis neque eu augue varius facilisis. Nunc risus lorem, fermentum iaculis diam id, faucibus efficitur augue. Sed eu orci nisl. Nam consectetur tincidunt tristique. Nullam sagittis convallis magna a mattis. Aliquam erat volutpat. Vivamus dictum tortor id consequat euismod.
				Suspendisse potenti. Vestibulum vestibulum pharetra urna ac luctus. Cras hendrerit eleifend risus hendrerit tincidunt. Nunc sit amet nibh ex. Aliquam erat volutpat. Etiam imperdiet finibus purus eu lacinia. Quisque id mi ultrices, facilisis elit iaculis, egestas lacus. Vestibulum luctus quam quis lacus egestas facilisis. Nam et erat vulputate, vulputate ex eget, consequat elit. Vestibulum volutpat dolor justo, id maximus libero tempor non. Nam in tristique lectus. Sed porttitor mi ante, eget rhoncus ligula lobortis at. In pellentesque eros ut vestibulum cursus. Aliquam quis lobortis justo. Nunc a volutpat tellus. 
				t, consectetur adipiscing elit. Maecenas ac suscipit diam. Aliquam nec tellus dui. Donec non lorem a ligula dapibus accumsan in in nisi. Nam cursus tellus ut eros sagittis ultrices. Vivamus aliquet quam ac turpis tempor hendrerit. Morbi lacus purus, interdum quis porta a, volutpat quis nunc. Cras ex orci, placerat eget faucibus id, eleifend eget eros. Ut dignissim, lorem aliquam bibendum porttitor, eros ipsum consequat tellus, nec blandit erat neque et mauris. Fusce non ex sed nisl ornare eleifend quis malesuada metus.
				Quisque laoreet vel lectus quis lobortis. Morbi auctor lacus quis mauris eleifend luctus. Aliquam porttitor nisi sit amet faucibus mattis. Vestibulum eu ultricies nisl. Suspendisse diam nunc, tempor ut magna eu, rhoncus ornare diam. Quisque lobortis metus eu mi rhoncus, at ultrices justo porttitor. Vestibulum vulputate, augue at rhoncus malesuada, justo orci sollicitudin magna, id scelerisque erat enim vel sem. Morbi lobortis et odio quis dignissim. Pellentesque in consequat nibh, congue tempor lacus. Praesent tempor justo lacus, sed cursus felis vehicula ac. Integer volutpat nisi non odio malesuada, non dignissim metus vestibulum. Quisque quis arcu posuere, mattis mauris et, congue nibh. Pellentesque scelerisque et odio eget condimentum.
				Quisque purus nibh, aliquet a euismod vel, cursus feugiat magna. Suspendisse at libero non nulla ornare tincidunt sit amet vitae metus. Aenean sollicitudin facilisis interdum. Pellentesque mi ante, vestibulum nec rhoncus vitae, mollis non mi. Etiam tortor nisl, feugiat vel risus et, molestie facilisis nisi. Maecenas eget nulla a massa faucibus molestie. Proin ac elit in metus rutrum vulputate nec et mauris. Aliquam dolor urna, porttitor at lorem in, vestibulum fermentum libero. Aenean a suscipit leo. Morbi convallis interdum diam, tempus auctor sem aliquet at. Nullam lacinia non felis vel rhoncus. Sed tristique lectus sapien, id placerat ligula cursus in.
				Aliquam mi felis, tempus vel lorem vel, bibendum dictum ipsum. Vivamus nec facilisis ligula. Praesent facilisis neque eu augue varius facilisis. Nunc risus lorem, fermentum iaculis diam id, faucibus efficitur augue. Sed eu orci nisl. Nam consectetur tincidunt tristique. Nullam sagittis convallis magna a mattis. Aliquam erat volutpat. Vivamus dictum tortor id consequat euismod.
				Suspendisse potenti. Vest
				t, consectetur adipiscing elit. Maecenas ac suscipit diam. Aliquam nec tellus dui. Donec non lorem a ligula dapibus accumsan in in nisi. Nam cursus tellus ut eros sagittis ultrices. Vivamus aliquet quam ac turpis tempor hendrerit. Morbi lacus purus, interdum quis porta a, volutpat quis nunc. Cras ex orci, placerat eget faucibus id, eleifend eget eros. Ut dignissim, lorem aliquam bibendum porttitor, eros ipsum consequat tellus, nec blandit erat neque et mauris. Fusce non ex sed nisl ornare eleifend quis malesuada metus.
				Quisque laoreet vel lectus quis lobortis. Morbi auctor lacus quis mauris eleifend luctus. Aliquam porttitor nisi sit amet faucibus mattis. Vestibulum eu ultricies nisl. Suspendisse diam nunc, tempor ut magna eu, rhoncus ornare diam. Quisque lobortis metus eu mi rhoncus, at ultrices justo porttitor. Vestibulum vulputate, augue at rhoncus malesuada, justo orci sollicitudin magna, id scelerisque erat enim vel sem. Morbi lobortis et odio quis dignissim. Pellentesque in consequat nibh, congue tempor lacus. Praesent tempor justo lacus, sed cursus felis vehicula ac. Integer volutpat nisi non odio malesuada, non dignissim metus vestibulum. Quisque quis arcu posuere, mattis mauris et, congue nibh. Pellentesque scelerisque et odio eget condimentum.
				Quisque purus nibh, aliquet a euismod vel, cursus feugiat magna. Suspendisse at libero non nulla ornare tincidunt sit amet vitae metus. Aenean sollicitudin facilisis interdum. Pellentesque mi ante, vestibulum nec rhoncus vitae, mollis non mi. Etiam tortor nisl, feugiat vel risus et, molestie facilisis nisi. Maecenas eget nulla a massa faucibus molestie. Proin ac elit in metus rutrum vulputate nec et mauris. Aliquam dolor urna, porttitor at lorem in, vestibulum fermentum libero. Aenean a suscipit leo. Morbi convallis interdum diam, tempus auctor sem aliquet at. Nullam lacinia non felis vel rhoncus. Sed tristique lectus sapien, id placerat ligula cursus in.
				Aliquam mi felis, tempus vel lorem vel, bibendum dictum ipsum. Vivamus nec facilisis ligula. Praesent facilisis neque eu augue varius facilisis. Nunc risus lorem, fermentum iaculis diam id, faucibus efficitur augue. Sed eu orci nisl. Nam consectetur tincidunt tristique. Nullam sagittis convallis magna a mattis. Aliquam erat volutpat. Vivamus dictum tortor id consequat euismod.
				Suspendisse potenti. Vest
			</div>
		</section>
	);
}

export default About;