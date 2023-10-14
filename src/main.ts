import "./style.css";
import { themeChange } from "theme-change";
themeChange();
document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
 <div class="m-2 flex flex gap-3">
	<h2 class="mb-4 text-2xl text-blue-500 font-bold">Themes:</h2>
	<select data-choose-theme class="focus:outline-none h-10  px-3 border">
		<option value="light">light</option>
		<option value="dark">dark</option>
		<option value="dracula">dracula</option>
		<option value="pastel">pastel</option>
		<option value="emerald">emerald</option>
	</select>
</div
`;
