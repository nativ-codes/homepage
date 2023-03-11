function Logo({isPrimary}) {
	return (
		<svg className="logo w-[600px] self-center" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="1050" height="630" viewBox="0 0 1050 630" xmlSpace="preserve">
			<g className="right-arrow">
				<g transform="matrix(0 1 1 0 140.03 286.99)">
					<path className={isPrimary ? 'fill-primary' : 'fill-white'} d="M 7.06202 69.84495 L -63.01254 70.03134 L -6.987470000000002 -70.03135 L 63.01253 -70.03135 z" />
					<path className="fill-black opacity-20" d="M 7.06202 69.84495 L -63.01254 70.03134 L -6.987470000000002 -70.03135 L 63.01253 -70.03135 z" />
				</g>
				<g transform="matrix(0 -1 1 0 245 385)">
					<path className={isPrimary ? 'fill-primary' : 'fill-white'} d="M -35 175 L -105 175 L 35 -175 L 105 -175 z" />
				</g>
			</g>
			<g className="left-arrow">
				<g transform="matrix(0 -1 -1 0 909.97 343.01)">
					<path className={isPrimary ? 'fill-primary' : 'fill-white'} d="M 7.06202 69.84495 L -63.01254 70.03134 L -6.987470000000002 -70.03135 L 63.01253 -70.03135 z" />
					<path className="fill-black opacity-20" d="M 7.06202 69.84495 L -63.01254 70.03134 L -6.987470000000002 -70.03135 L 63.01253 -70.03135 z" />
				</g>
				<g transform="matrix(0 1 -1 0 805 245)">
					<path className={isPrimary ? 'fill-primary' : 'fill-white'} d="M -35 175 L -105 175 L 35 -175 L 105 -175 z" />
				</g>
			</g>
			<g className="text" transform="matrix(1 0 0 1 525 315)">
				<image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAA/CAYAAAArHFsvAAAACXBIWXMAAAsSAAALEgHS3X78AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEp9JREFUeNrsXe1127gSvebxf3ErEFOBuRWYqcDaCkxXEKYCMxWEqSB0BStXEKqCyBVErmCpCvh+aLjh6okAAQ5IgMKco7PZKCLxMTN37gAY3DRNAy9evFyVRPS5JDWAvYN9igGEgu/31DcvXkzoXUh/BoADfQCgGvPwW3pASR9bJRF8V1nQvpAmpACQG3p+7ICyVpp9EIGCrO+V5WOSzAwaIbWh/dwN/N07jW37OVgWYLT9iRX6BAA7GvcKwNbigILD5lzu1xQ+Sbd/6Qhb2qrY/E3TNBWAewBPFoO0iObfWNC+HMAzgKMh5UwA/HAAoG80+7ATAFkM4KfguR8tBukUwHfB9x8MAl8KYAPggel5u5kD+ZD6lCoCskiO5DC3E4J16ytMyBs5/4qCkP0MgVWLJy74JBXdy0j31kw6lw+Zm6Dz5++SaN+L2BkCwKrzZy88sidwkI29jZJJAI/beYZk+DXZ8wPjs+/pmTW9YyqWFFFQ8A+Ar4zg3NrrI4C/aS5ct907mqdn6tMv6ldJwZoXPRs+0JiuGXXuFwZkW4Oz/9/CjVSqbeC8PouQvfCzjj55RP966pySSMAkNzBGrSNZGezXit5hGtBCApZfNMemZU0ByBKA+rxf3SBkyuDKZYkoG/DVoD09EwEJhwL0ihrlQVofPNY+WmWXCqd1HB2maiN7fgNfWj6ZCJgvAfV36kdkYOwOEwFzH1Av0Q+uSU/+oeDHA/VliQk4p0jV35Gux0MAujU8P3nDnePaEcBYMotOLdPXCOL0csE4Jj/Ak3rTlXtyZhysM8Qpi2eStaj06+eCbfmRgMH7qv8H52qGYHd7yYcFAlSvPEhrg8Y9/Ho+t5Q4bbDoU/DUAb0AZQJKBiCrYG6zkS6bHtOvmADjwTK9+7pgwrKi/lWwc5lojsB6anBuZY0LGxVvJdR764FG6FDuJayuYnpXDfFGKRVWcEmOcOPsayEApYyRmY4Fz40k0BirdyV4N0txsrKI+l8r/C6luVtZqnePNO4JlnmWus2CJHDzDDwnCVjNPA9p10fcDvhBCb8zuQ8QZEadg2en7p4pUGoMP39OgG7X/rcW6MVKEAiNCSLiGSN8FSdTKYBZCvFRNFvkTrFfLrLpn7D7uK1pu7XheFjeHf9gYPR4jRMmkgjDNrDkfqhYpQbwMiJomkJSSYSu69xdAOfzuVoKOJ+DdLhgG/t+pYTMFl+97o5/MPBHj55Fa03mBn4df8qxv8e8O29TiDds6bLnEPOn34bKEcNOMcSwY0lCF6SXLN9xXSd5Uots69gNbgPFSfMgLV9j7MoKfpcktxwgXo/PZjb0PnmB/nLHFnauOfeNwWGADZnMBryDZ8+GCKTLhdvZ0jMF50RqrL69AvhCn2+a+vdGgdG2/YtbxQe0B/krXK9kio4lI6ZQe2xlZdF9ZUMfacynHu8E4jWsckRfOdfGXvG7FGR1gdVG1JcN1I9vfcOwPQBbRnB+o+e1fap72Hrc6RfHux/x+x4D04xq3/OdyTXT9uhPYrh/bxb4Rt2TAzuyz0pC5ooBOvcFl7KDTdNUjZrUTdPETdNgwo9IMPGnbtQlnaGdKuNYTfDuhPn9B8Hz8hnGtjQwvknDI4emabKmaUKN95cD37Ef+PyMqU/lCD+USvRHxRdGiu/OFd8xRHdCmqtcw59z+y7V9ycz+0RdG8sU3hE2TbMV2GavHgeakVWF66w2lkK8Q1fEgrzws2hb0twRxJsGdVnWWHZ2BPCZ2qeTxalI5/+UpOyO9O/qAeM01hZ2OF0ykkL/SFBJbXmS2O0QX1hYYAs1zVVOjPcP6ts7w7OLhae6I43ffFOc95qY9MuF58QiPQ5GKGaJ69sAJQOFt57v/rMzzwuLlLCncIkoINAtTJJjXIWwHfg2Yu3J8X/uGfNsIFjmI9LLRwKdBHyXjLRA/ToyPZpYZhs1cxCSLdiPRBp6mI/wE+/0jL8wYClOBtBvgu+urdrYRuAwWydcSNi3F14pLMhahJK5zTWfOcYpvjADWXe8kzO/8DowAJFlGWROMYGZ9d6W3XwzFLjbEMhGGLdpLoM/jdINVusRupbSfGyH/CAYMDG7ASB9DZINAIoS/WklX/7TDEAfBVmLKcZ7A/Gyx1ZT13SZ5ovhYHDfAel3hXfpglgLzvsJ7PtJ87e223ZN7XsZwaI33t2wSKUC8ENS3JsBTLpc+KAmEJfJLM8iVh2Q96LneLYzj3cuCSB0om3ddpsG53OHnwzsny57ngqcu7b7YkAPbJF0RP+87/odjEVTvSxQMEYRSC+92lgqMep6IKt7gC9KPyVAmh7vDcTrxKWmrumw5x2mXUapMTyFrtuuDNPXhk6hlw6+d8S2U4kvFxGxJfquSuM3W0yU8g8UjDGFeLPB40KjLFn0XyiyuhxeOOUA8SYfk+OdSdjsQeOZG02mubF4jnQAeujatqn2Hifq5xyymfh3NotOAHiHie4vCBQ7kkgU9yuWtxkq13DCuSSQCeGFUwqJUzEx3jHEhSIKjWeG0CuakMHeQjgx1HejH2cO9g+a8+cKgB1wKoyhKgmWJ7VmRmGNU7Gk0mRmQfWY1X6AEn5fUKQVQu/qQBmrW2KmYU6pBEZm6siVaA53mpG5jt1w3C9tG1srwb8DXSfoU2XRLqWBdQKQJQK07lh0CdcvGKq6pnMOuoJ8t2OJZRQyydC/HriDeP2ikDzXs+jpjIw7IAohXvbINZ+rY+C55fOSMM/llMxqySBWQ33D2ArLXIfeYtxZceCU+fpBgTkbIdAtVFJKQHop1cYyDfY8lNVt4IVTSvQfceMuFJNJGG2l+VxVeznC/s2Zqn16tYA9D7Vxjv7ODUyqwg3QP3C6p57ro2N7NaN/uMPvOytGE7FgpPK+SEB66zBTTAXseWhasXCY+bgK0qL5nAKg85HGbdrBTikR1HekVxa1/wD19UmXAFpnrBMsU7bQP4LWRwq+kg7lujgYjGxEKunUGu5WG8s1gXcuVudFvG7IdVe0KHAbw2h12uYCQE8BGjaBmEsAXYOnXvdSJIPehjFIiOpzB6gnBejWYS2t2tgG/TtPVZ3wVKzOyzSFSzgCt0uiE8TuFwjQtvVJtT0rx2zmsOAARMd/JDBzl3gXqDdTAnQLaEuqNpZJALdmZHWJx1VWEQHoI8atoSUQHxkaA9A67TpYPheqfdpZ2IfDwu1FlTyFCx+PFqS/GXr+GsDfGLj8GzB3agnVxhLwnm+dgtV5+a9DFR1xSw0Fbi8YdxZZFcx8atJeif0QOC8ZgI8G7exhCJsOGF9YYxnVxlKJE9aJqHPJREXeHlilkBieDguIIC4ikntm5xnmlbDMa5r72CCbXhGbzqcAaMD9amMRxOdbdTMAMlaXe1tgN6ydwCg2zEHWHEeDPAhMI4kmWfGyDKkpqP8A3l3eXXnuw5bAwMv2cLfamMgJywqTjGF1Y9dGvagFU6oBUSjR12IGRny3wDlbStCx9+a3ODkQsTQF1BeXgANDnangXrUx0064gniNPvU2wA7QoiNuKswoQ//u3DfwnFI4aOqs7U7N9aBj6YGzaobg2rMDJoH68Zw8BAY7UsKtamMiJ/wOnjOnheT9IbxwSsHEolPD7Hkq52o7QAP2bbBSbc/RMRtR9Tk+O2AWqJ+7dh0Y7kQJd6qNZUzOXJfVmbrU4dpZtOiI2xB2lKL/aBXnRRU6LHyJAG1bnzYLBrAQy1wqmQOoP4LvmOC/PuV2gg6kHfp+SdpqYwnmS5+kEFeH2jK+q6QoqS9IKLzOs0lN4/1JEHjJgqJsiCExyTvUrmbcwO5TEQdNW7TFBiKoX5XpEkDrBEMVcxs+M4/ZXBjSYlhCfmE94lltlcnydqLGp6TsfeeL22pj8UyDK2LIBfOkF+hPp/87MR5bWcf7kwDgQsH8JgKGcTQAJBXEpwgu6csGdpf83EFcV+CSL4hgxzEyneDHJYDeaPyGGwD3cK/SpMyGI8KU55G6VwYTK4ON1cY2kmiHu001fOGSqVlc3zLLSjLeqUQvagPGPQWITO2wOAPmqSSE3pKTK2ATKgaDbVC6h5ehOvwn9Aud3AGIpgToGnZWGxM5ON3CJGMc0B18+U9uKTVAOJI4sMJAO3WY8D3svrpUp082HDvMoF5X+w3uFJDRCewqeFHNDsTQv4BjE0zc4Bp2VRtLwFvWk4PV2cIgliQV+jdw9N0qNkfgVkNvo0kBe08A7DVZRDljm2PopSddAbCl988mGUJMe+cpmMlgE9hRbUz0jh3MpnNKCSuKvG7PxqJDyNPbc7QTgiCjtHjsdTMD2QxtDUeMZbEAW+CeRy8nkN5o/C4KZmrwHvNXG4swfQpzKKvzLNqMU3oXgEFyBtgrQeBmkklsoXeW9mFiQIsVgmhdW/qK6Zd7CugdPdrBjfR2qdk/l9L3NsoBGuelgxkbXGHeamMiAOQqTDImkvXlP6ed8y7YZDOx5zbaHgNo6QTjGJP9fh9on1rOqROwxBPpRwn1jVMuBdRj+ldckZ8ISe+4A17lwP7WAoVp2fIlWRliK6GEnR8sMbjUM2l2dlr0sOO2zF6MaQqTyJxhBvVNSq0tRQb1Jj0bwxLDahjkmuDQ+oDUYNAcUp90wct0VmWsRDRP95q/P+J60tsJ9XWFU1aqAt9SZ+gaQHcN/FFgoNwic373I5SZu50FfP1bbnYqKhQTW8CSZO2UyTN+p6C5dCek/p+fKb+jv5exjZZF64L03wC+GJiDGPppXxfYc0btG+NHr8EH9el3RfjEAdIb1R8ElgxOCnNXefUprQviy3+aCQhFenhvCYvIMe6y+PZCeA79aR1UX8GXTxi2VpxjXK3qZ/zeZMrlkH+OBOdXC9lzRH074LTsMQacTRTksU1imsNPPT64YtA5nQzGIbBokFLw1TKVvWflkPJk8MIpB4gLl9jEIsaC6wqnlLcuUCfknH5AXrpwC3kK78DANu+oPRU0d8Z2wOt5ZFuOlgTQCY1FQQHML+rbmuHZ+cLZ85AgbUU6V0J9X1BEtqGTOdrfNE1TCZD948TRYUjvU4lobzQc9NoxJXoCz9pn0/P3O5jfLZuQks/1/vOI+afibz5gnl2shYC56gDKlmysutCfkMZmA3mFvT42OQQ0K/AtIbV92nc+9dlcR51+cV4O8ZdGViVnCAymEh275JxbDrkRAGep2dbXM5275F9afXsY0fY/by1TiLoTtZu4ZUXH6djCokt44ZI91GpEmypMMnTuYyant6JI/tFQW9ujXsUAO9wz2aLpPol0YrtgGznC7gp1Y3GghH4m9WEk8A6RdwD7WwsHr8YpbVSBPxWdCb57m9ngQgFTuusELl74mOm9wr+d26GYClq5JYd852vd6dPKQd3ZYfl7QxIsN7VdO6B3JWDHLu4+hpMwG3AicciZBQCYCJxwDl+jm1O2GHa9o+mKcnMHrdyywrD6BXsC6R+O6c3bgpllK09Y9qUYFU5p6gdL2/fvxrzA4kHcMxtCJkkn2MBORUztHvNdx7lUyZn+zZRB69GRsQ0HOsonh/TlbeHM8gi+/S62S2qxLeWtjgWWDyKXAUeSaMkWJ1xCfLQm85jKzqKPDgRuXZCOoX87jo0gVuJ0LZ/tgcfuCsA5wfXsdalhZ0Zy1yVqgQMDWTKAdC5xwqVl/e0TX/6T30gLBwK3rhzIsbxa2LYXCiBUQazNDtgaeLwsHJx35Ff2V2b/e9iVwXnHWdY4cGQgSwDfNH8bQrzD07aIsZCwCc+ipwmIjhaziZoM+YtFbfqMcRun9hYGHkecjlKlC9X9I83bkoOPKQgg11xszuchcGggM+hVG8skg1JY6Hy3gu9T2Hv3r4ty6NGrwoG25zilh3cztuGN2lAw6f6GQPF95rF9pWzAdqHA/IVYc+FdwOzLLG/oyWAEjg1kqhhhhxKA3loaOeaC71aeRU8y3q44rpZ5Pk0Maq2Tj8GfGt3Sc7/M4DTfcSrQtMHyrld8J8YcYfkVwnTsKML0GZzWhi7OReDgQKYYvla1gfhYSu4Yq+uOgRfe8e6y0BcHnVdJDmYKoG7Xmk3aT03PjyYC6h2NXYRl1Rt4w2l58M8OY/bA3K9zGwrQdhPo2weZDQWODmIyEKRFnX+1PEIuBd+tPUgbZdG5w/1ogfojASkXsLXs6w/SvcOE9p7jlA17YmY47x3wSuD2DuYjOf1XCmj+ormKccq47b2JD5aK9OEjs74dSd8+0POlNnTTNE2M/jXNvcXRVkTtC70+eWFk0nssrxBFTH2KIb7v+hy89uSsthYGs21/EvrvkAIub/hdP7nyoOVloISkZ62uDa1AeOzoWvtRkpumafzwe/FyfRLh8pG9A9xde+0jGzYTDS/ugnbc813NFfz9bwBfLSBFKLxuNgAAAABJRU5ErkJggg==" x="-244" y="-31.5" width="488" height="63"></image>
			</g>
		</svg>
	);
}

export default Logo;