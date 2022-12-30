//変数

var object_match_id = {};//objのname:id
/**
 * 右クリック対象ID
 * 
 * @type {String}
 */
var activeContextId;

//サウンド配列
var sound = [0];
var sound_name = [0];

//サウンドの持つ効果
var sound_effect = [0];
var se_name = [0];

/**
 * 今まで作った背景の個数
 * 
 * @type {number}
 */
var back_cnt = 0;

/**
 * Blocklyワークスペース
 *  @type {HTMLElement}
 */
var workspace;
/**
 *  @type {HTMLElement}
 */
var workspaceBlocks;
/**
 * fabricキャンバス
 * @type {HTMLElement}
 */
let canvas;//fabric.jsキャンバス
/**
 * 名前テキストボックス
 * @type {HTMLElement}
 */
let inputName;
/**
 * 幅比率テキストボックス
 * @type {HTMLElement}
 */
let inputSizeX;
/**
 * 高さ比率テキストボックス
 * @type {HTMLElement}
 */
let inputSizeY;
/**
 * 角度テキストボックス
 * @type {HTMLElement}
 */
let Angles;
/**
 * X座標テキストボックス
 * @type {HTMLElement}
 */
let inputPositionX;
/**
 * Y座標テキストボックス
 * @type {HTMLElement}
 */
let inputPositionY;

/**
 * オブジェクトid紐づけ配列
 * 
 * @type {Array<string>}
 */
let checkName = [];//オブジェクトid紐づけ配列
/**
 * 背景保存配列
 * @type {{index: src}}
 */
let BackgroundArray = {};//背景保存配列

//関数群
//イベント
window.onload = function() {
	/**
	 * Blocklyツールボックス
	 * @type {HTMLElement} 
	 */

	var toolbox;
	var url;
	if(location.pathname.split('/')[1]=="create"){
		url="/getBlocklyData/default";
	}else{
		url="/getBlocklyData/"+location.pathname.split('/')[2];
	}
	$.get(url)
		//①サーバーからの返信を受け取る 
		.done(function(data) {
			toolbox = data;
		})
		//②通信エラーの場合
		.fail(function() {
			console.log("error");
		})
		//③通信が終了した場合
		.always(function() {
			/**
				* Blocklyオプション
				* @type {{toolbox: HTMLElement, collapse: boolean, comments: boolean, disable: boolean, maxBlocks: number, trashcan: boolean, horizontalLayout: boolean, toolboxPosition: string, css: boolean, media: 'https://blockly-demo.appspot.com/static/media/', rtl: boolean, scrollbars: boolean, sounds: boolean, oneBasedIndex: boolean, grid: { spacing: number, length: number, colour: color, snap: boolean }, zoom: { wheel: boolean, startScale: number, maxScale: number, scaleSpeed: number}}}
				*/
			var options = {
				toolbox: toolbox,
				collapse: true,
				comments: true,
				disable: true,
				maxBlocks: Infinity,
				trashcan: true,
				horizontalLayout: false,
				toolboxPosition: 'start',
				css: true,
				media: 'https://blockly-demo.appspot.com/static/media/',
				rtl: false,
				scrollbars: true,
				sounds: true,
				oneBasedIndex: true,
				grid: {
					spacing: 20,
					length: 1,
					colour: '#888',
					snap: false
				},
				zoom: {
					controls: true,
					wheel: false,
					startScale: 0.85,
					maxScale: 0.85,
					minScale: 0.85,
					scaleSpeed: 1.2
				}
			};

			workspace = Blockly.inject("blocklyDiv", options);
			workspaceBlocks = document.getElementById("workspaceBlocks");

			// Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
			workspace.addChangeListener(function(e) {
				if (!e.isOpen && e.type == "bubble_open" && e.bubbleType == "mutator") {//ミュテーターアイコンが閉じたとき
					const block_type = workspace.getBlockById(e.blockId).type;//変更されたブロックタイプ
					if (block_type == "operator" || block_type == "switch") {
						const o_nums = workspace.getBlocksByType("o_num", true);
						for (let i = 0; i < o_nums.length; i++) {
							if (o_nums[i].isShadow() && o_nums[i].getSurroundParent() == null) {
								o_nums[i].dispose();
							}
						}
					}
				}
			});
			Blockly.Flyout.prototype.autoClose = false;//フライアウトの固定化
			//zoomの+,-を消去し、中央に戻すボタンの位置を変更する。
			document.getElementsByClassName("blocklyZoom")[0].style.display = "none";
			document.getElementsByClassName("blocklyZoom")[1].style.display = "none";

			var default_w = document.getElementById("left_element").style.width;
			var default_h = document.getElementById("left_element").style.height;

			default_w = (parseInt(default_w.slice(0, -2)) - 74) + "px";//74
			default_h = (parseInt(default_h.slice(0, -2)) - 196) + "px";//196

			document.getElementsByClassName("blocklyZoom")[2].parentElement.style.transform = 'translate(' + default_w + ',' + default_h + ')';

			// Siber_event();
			document.getElementById("objects").oncontextmenu = function() { return false; }//右クリック消去
			document.getElementById("BGinformation").oncontextmenu = function() { return false; }//右クリック消去
			// object_match_id['1KB'] = 0;//消去予定

			window.onclick = function() {
				document.getElementById('contextmenu').style.display = "none";
			}

			//キャンバス初期処理
			canvas = this.__canvas = new fabric.Canvas('operation_canvas', {
				perPixelTargetFind: true//透明部分無視ドラッグ
			});
			fabric.Object.NUM_FRACTION_DIGITS = 17;

			canvas.on({//fabric.jsイベント
				'object:moving': function(e) {
					e.target.opacity = 0.7;

				},
				'object:modified': function(e) {
					e.target.opacity = 1;
					e.target.bringToFront();//最前面処理
				},
				'selection:created': function(e) {
					let activeObject = canvas.getActiveObject();
					let target = document.getElementsByClassName('is-select')[0];
					Remove_item_focus(target.id);
					target.classList.remove('is-select');
					document.getElementById(activeObject.id).classList.add('is-select');
					setObjectData(activeObject.id);
				},
				'selection:updated': function(e) {
					let activeObject = canvas.getActiveObject();
					let target = document.getElementsByClassName('is-select')[0];
					Remove_item_focus(target.id);
					target.classList.remove('is-select');
					document.getElementById(activeObject.id).classList.add('is-select');
					setObjectData(activeObject.id);
				},
				'object:moving': function(e) {
					setObjectData(e.target.id);
				},
				'object:scaling': function(e) {
					setObjectData(e.target.id);
				},
				'object:rotating': function(e) {
					setObjectData(e.target.id);
				}
			});

			inputName = document.getElementById("Object_name");
			inputSizeX = document.getElementById("sizeX");
			inputSizeY = document.getElementById("sizeY");
			Angles = document.getElementById("Object_direction");
			inputPositionX = document.getElementById("Object_X");
			inputPositionY = document.getElementById("Object_Y");
			inputName.onfocus = function() {
				inputName.dataset.name = this.value;
			};
			inputName.onchange = function() {
				let name = setObjectName(this.value);
				getObject(this.dataset.name).id = setObjectName(name);
				document.getElementById(this.dataset.name).id = name;
				document.getElementById(name).getElementsByClassName("obj img")[0].children[0].id = "img" + name;
				document.getElementById(name).getElementsByClassName("obj name")[0].innerHTML = name;
				checkName[checkName.indexOf(this.dataset.name)] = name;
				canvas.renderAll();

				let blocks = workspace.getBlocksByType('objdropbox', true);
				for (let b in blocks) {
					console.log(blocks[b].getField('object'));
					if (this.dataset.name == blocks[b].getField('object').selectedOption[0]) {
						blocks[b].generateOptions();
						blocks[b].getField('object').doValueUpdate(name);
						blocks[b].getField('object').selectedOption = [name, name];
						workspace.render();//workspaceの更新
					}
				}
				workspace.getToolbox().refreshSelection();//toolboxの更新

				this.dataset.name = name;

			};
			inputSizeX.onchange = function() {
				let object = getObject(inputName.value);
				console.log(this.value);
				console.log(object);
				object.scaleX = Number(this.value) / 100;
				canvas.renderAll();
				setObjectData(object.id);
			};
			inputSizeY.onchange = function() {
				let object = getObject(inputName.value);
				object.scaleY = Number(this.value) / 100;
				canvas.renderAll();
				setObjectData(object.id);
			};
			Angles.onchange = function() {
				let object = getObject(inputName.value);
				object.rotate(Number(this.value));
				canvas.renderAll();
				setObjectData(object.id);
			};
			inputPositionX.onchange = function() {
				let object = getObject(inputName.value);
				object.set({ left: Number(inputPositionX.value) });
				canvas.renderAll();
				setObjectData(object.id);
			};
			inputPositionY.onchange = function() {
				let object = getObject(inputName.value);
				object.set({ top: Number(inputPositionY.value) });
				canvas.renderAll();
				setObjectData(object.id);
			};
			restore();
		})
}

function AddPropertyObj(e) {//オブジェクト追加処理
	if (!e.value.length) {//オブジェクトキャンセルバグ
		return;
	}
	const file = e.files[0];
	let objectName = setObjectName(file.name.split('.')[0]);
	checkName.push(objectName);

	const reader = new FileReader();
	const imgReader = new Image();
	reader.onloadend = () => {
		imgReader.onload = () => {

			const imgType = imgReader.src.substring(5, imgReader.src.indexOf(';'));

			///画像サイズをキャンバスに合わせる
			//画像サイズを決める
			var imgHeight;
			var imgWidth;
			if (imgReader.width > 600 || imgReader.height > 400) {
				if (imgReader.width <= imgReader.height) {
					imgHeight = 400;
					imgWidth = imgReader.width * (400 / imgReader.height);
				}
				else {
					imgWidth = 600;
					imgHeight = imgReader.height * (600 / imgReader.width);
				}
				if (imgWidth > 600 || imgHeight > 400) {
					if (imgWidth <= imgHeight) {
						imgWidth = 600;
						imgHeight = imgReader.height * (600 / imgReader.width);
					} else {
						imgHeight = 400;
						imgWidth = imgReader.width * (400 / imgReader.height);
					}
				}
			} else {
				imgHeight = imgReader.height;
				imgWidth = imgReader.width;
			}

			//一時キャンバスを作り画像をリサイズ
			const resizeCanvas = document.createElement('canvas');
			resizeCanvas.width = imgWidth;
			resizeCanvas.height = imgHeight;
			const ctx = resizeCanvas.getContext('2d');
			ctx.drawImage(imgReader, 0, 0, imgWidth, imgHeight);
			///

			setObjectImg(resizeCanvas.toDataURL(imgType), objectName, imgWidth, imgHeight, 1, 1, 0, true);
		}
		imgReader.src = reader.result;
	}
	reader.readAsDataURL(e.files[0]);
	e.value = '';
}
function AddBackground(e) {//背景追加処理
	if (!e.value.length) {//オブジェクトキャンセルバグ
		return;
	}
	const reader = new FileReader();
	const imgReader = new Image();
	reader.onloadend = () => {
		imgReader.onload = () => {

			///画像サイズをキャンバスに合わせる
			const imgType = imgReader.src.substring(5, imgReader.src.indexOf(';'));

			//画像サイズを決める
			var imgHeight;
			var imgWidth;
			if (imgReader.width > 600 || imgReader.height > 400) {
				if (imgReader.width <= imgReader.height) {
					imgHeight = 400;
					imgWidth = imgReader.width * (400 / imgReader.height);
				}
				else {
					imgWidth = 600;
					imgHeight = imgReader.height * (600 / imgReader.width);
				}
				if (imgWidth > 600 || imgHeight > 400) {
					if (imgWidth <= imgHeight) {
						imgWidth = 600;
						imgHeight = imgReader.height * (600 / imgReader.width);
					} else {
						imgHeight = 400;
						imgWidth = imgReader.width * (400 / imgReader.height);
					}
				}
			} else {
				imgHeight = imgReader.height;
				imgWidth = imgReader.width;
			}

			//一時キャンバスを作り画像をリサイズ
			const resizeCanvas = document.createElement('canvas');
			resizeCanvas.width = imgWidth;
			resizeCanvas.height = imgHeight;
			const ctx = resizeCanvas.getContext('2d');
			ctx.drawImage(imgReader, 0, 0, imgWidth, imgHeight);
			///

			setBackgroundImg(resizeCanvas.toDataURL(imgType), imgWidth, imgHeight);
		}
		imgReader.src = reader.result;
	}
	reader.readAsDataURL(e.files[0]);

	e.value = '';
}
/**
 * オブジェクト画像追加関数
 * 
 * @param {string} src 画像src
 * @param {string} name 画像ID
 * @param {number} width 横幅
 * @param {number} height 高さ
 * @param {number} scaleX 横幅比率
 * @param {number} scaleY 高さ比率
 * @param {number} angle 角度
 * @param {boolean} visible 表示、非表示
 */
function setObjectImg(src, name, width, height, scaleX, scaleY, angle, visible) {
	const img = new Image();
	img.src = src;
	set_box_spr(name, src, width, height);//スプライトに追加
	img.onload = () => {
		fabric.Image.fromURL(src,
			function(img) {
				img.id = name;//オブジェクトIDの設定
				img.on('added', function() { setObjectData(this.id); });//追加された際のプロパティ表示処置
				canvas.add(img);
				canvas.renderAll();
			}, { crossOrigin: 'anonymous', scaleX: scaleX, scaleY: scaleY, angle: angle, visible: visible }
		);
	}
}
/**
 * 背景画像追加関数
 * 
 * @param {string} src 画像src
 * @param {number} width 横幅
 * @param {number} height 高さ
 */
function setBackgroundImg(src, width, height) {//画像をFabric.jsでキャンバス背景に描写
	const img = new Image();
	img.src = src;
	BackgroundArray[back_cnt] = {
		src: src,
		width: width,
		height: height
	};
	set_bginfo_img_back(src, width, height, back_cnt);
	back_cnt += 1;
	img.onload = () => {
		fabric.Image.fromURL(src,
			function(img) {
				canvas.setBackgroundImage(img, function() {//背景画像を配置後の処理
					console.log("背景追加");
					console.log(canvas.getCenter());
					img.id = "back" + back_cnt;
				}, {
					originX: 'center',
					originY: 'center',
					left: canvas.getCenter().left,
					top: canvas.getCenter().top
				});
				canvas.renderAll();
			}
		);
	}
}
/**
 * オブジェクト名、登録関数
 * 
 * @param {string} objectName ファイル名
 * @returns {string} 登録名
 */
function setObjectName(objectName) {//オブジェクト名前制作処理
	let cnt = 1;
	while (checkName.indexOf(objectName) != -1) {
		objectName = objectName.split(":")[0] + ":" + cnt;
		cnt++;
	}
	// checkName.push(objectName);
	return objectName;
}
/**
 * 表示背景変更関数
 * @param {number} num 背景のID番号
 */
function changeBackgroundImg(num) {//画像をFabric.jsでキャンバス背景に描写
	const img = new Image();
	img.src = BackgroundArray[num].src;
	img.onload = () => {
		fabric.Image.fromURL(BackgroundArray[num].src,
			function(img) {
				canvas.setBackgroundImage(img, function() {//背景画像を配置後の処理
					console.log("背景変更");
					console.log(canvas.getCenter());
					img.id = "back" + num;
				}, {
					originX: 'center',
					originY: 'center',
					left: canvas.getCenter().left,
					top: canvas.getCenter().top
				});
				canvas.renderAll();
			}
		);
	}
}
/**
 * オブジェクトスプライト追加関数
 * 
 * @param {string} name オブジェクトID
 * @param {string} imgSrc オブジェクト画像src
 * @param {number} nw 横幅
 * @param {number} nh 高さ
 */
function set_box_spr(name, imgSrc, nw, nh) {
	//----sprite
	try {
		Remove_item_focus(document.getElementsByClassName("is-select")[0].id);
	} catch { }
	$('#objects').append(
		'<div class="' + 'sprite is-select" id="' + name + '">' +
		'<div class="' + 'obj img' + '">' +
		'<img src="' + imgSrc + '" id="img' + name + '">' +
		'</div>' +
		'<div class="' + 'obj name' + '">' +
		name +
		'</div>' +
		'<div class = "dustbox ' + name + '" onclick="Delete_Obj(this);">' +
		'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20" height="20" style="fill: rgba(6, 156, 28, 1);"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg>' +
		'</div>' +
		'</div>'
	);
	let imgHeight = nh;
	let imgWidth = nw;
	if (nw <= nh) {
		imgHeight = 44;
		imgWidth = nw * (44 / nh);
	}
	else {
		imgWidth = 67;
		imgHeight = nh * (67 / nw);
	}
	if (imgWidth > 67 || imgHeight > 44) {
		if (imgWidth <= imgHeight) {
			imgWidth = 67;
			imgHeight = nh * (67 / nw);
		} else {
			imgHeight = 44;
			imgWidth = nw * (44 / nh);
		}
	}
	document.getElementById("img" + name).width = imgWidth;
	document.getElementById("img" + name).height = imgHeight;
	Add_property_Event(name);//スプライトオブジェクトにeventを追加
}

/**
 * 背景スプライト追加関数
 * 
 * @param {string} src 背景画像src
 * @param {number} nw 横幅
 * @param {number} nh 高さ
 * @param {number} back_num 背景番号 
 */
function set_bginfo_img_back(src, nw, nh, back_num) {//divとimgの追加
	try {
		Remove_item_focus(document.getElementsByClassName("is-select-bg")[0].id);
	} catch { }
	$('#BGinformation').append(
		'<div class ="back is-select-bg" id="back' + back_num + '">' +
		'<img id="backImg ' + back_num + '" src="' + src + '">' +
		'</div>'
	);
	const backImg = document.getElementById("backImg " + back_num);
	if (nw < nh) {//高さの方が大きい場合
		backImg.width = nw * 44 / nh;
		backImg.height = 44;
	} else {//幅の方が大きい場合
		backImg.width = 66;
		backImg.height = nh * 66 / nw;
	}
	if (backImg.width > 66 || backImg.height > 44) {
		if (nw >= nh) {
			backImg.width = nw * 44 / nh;
			backImg.height = 44;
		} else {
			backImg.width = 66;
			backImg.height = nh * 66 / nw;
		}
	}
	Add_property_Event('back' + back_num);
}

//onが押された時にvisibilityをvisibleにする
function visibility_dis_on() {
	noneObject(inputName.value);
	console.log(document.getElementById("sample1on").checked);
	console.log(document.getElementById("sample1off").checked);
}
//offが押された時にvisibilityをhiddenにする
function visibility_dis_off() {
	noneObject(inputName.value);
	console.log(document.getElementById("sample1on").checked);
	console.log(document.getElementById("sample1off").checked);
}

//-----コンパイル用関数
//n_rotation
function con_angle_add(num = "", target = -1) {
	if (target == -1) {
		console.log("==focus")
		var angle = getRotationDegrees($("div[id=" + focus_num + "]"));
		angle = angle + num;
		gsap.to(".box" + focus_num, 0, {
			rotation: angle
		});
	} else {
		console.log("==target")
		var angle = getRotationDegrees($("div[id=" + target + "]"));
		angle = angle + num;
		gsap.to(".box" + target, 0, {
			rotation: angle
		});
	}
}

function con_angle_change(num = "", target = -1) {
	if (target == -1) {
		// var angle = parseInt($("input[id=Object_direction]").val());//現在の角度の取得
		if (num >= 360) {
			num = num % 360;
		}

		gsap.to(".box" + focus_num, 0, {
			rotation: num
		});
	} else {
		if (num >= 360) {
			num = num % 360;
		}

		gsap.to(".box" + target, 0, {
			rotation: num
		});
	}
}

//change_background
function con_back_change(num) {
	back_change_target(num);
}
//
function con_visibility_on(target) {
	$("div[id=" + target + "]").css("visibility", "visible");
	$("img[id=imgb" + target + "]").css("visibility", "visible");
}
//offが押された時にvisibilityをhiddenにする
function con_visibility_off(target) {
	$("div[id=" + target + "]").css("visibility", "hidden");
	$("img[id=imgb" + target + "]").css("visibility", "hidden");
}

function Delete_Obj(e) {//ゴミ箱、消去関数
	let del_obj = e.parentNode;
	del_obj.removeAttribute("onclick");
	deleteObj(del_obj.id);
	del_obj.remove();
	if (checkName.length > 0) {
		//選択オブジェクト変更
		setObjectData(checkName[0]);
		if (Array.from(del_obj.classList).indexOf("is-select") != -1) {
			document.getElementById(checkName[0]).classList.add("is-select");
		}
		let blocks = workspace.getBlocksByType('obj_dropbox', true);
		for (let b in blocks) {
			console.log(blocks[b].getField('object'));
			if (del_obj.id == blocks[b].getField('object').selectedOption_[0]) {
				blocks[b].generateOptions();
				blocks[b].getField('object').doValueUpdate_();
				blocks[b].getField('object').selectedOption_ = [checkName[0], checkName[0]];
				workspace.render();//workspaceの更新
			}
		}
		workspace.getToolbox().refreshSelection();//toolboxの更新
	} else {
		dataClear();
	}
}
function o_undo_redo(bl) {//元に戻す、やり直す
	workspace.undo(bl);
}
async function menu1() {//右クリック、複製
	const target = document.getElementById(activeContextId);
	if (target.classList[0] == "sprite") {//スプライト選択時
		const originalObject = getObject(activeContextId);
		setObjectImg(
			originalObject._element.src,
			setObjectName(originalObject.id),
			originalObject.width,
			originalObject.height,
			originalObject.scaleX,
			originalObject.scaleY,
			originalObject.angle,
			originalObject.visible
		);
		checkName.push(originalObject.id);

	} else if (target.classList[0] == "back") {//背景選択時
		setBackgroundImg(
			BackgroundArray[target.id.substring(4)].src,
			BackgroundArray[target.id.substring(4)].width,
			BackgroundArray[target.id.substring(4)].height
		);
	}
}
function menu2() {//右クリック、保存
	console.log("保存");
	// const target = document.getElementById(activeContextId);

	// const link = document.createElement('a');

	// let obj_name;
	// if (target.id.substring(0, 6) == "sprite") {//スプライト選択時
	//     link.href = target.getElementsByClassName("obj")[0].querySelector("img").src;
	//     obj_name = target.getElementsByClassName("obj")[1].textContent.replace(/\s+/g, "");

	// } else if (target.id.substring(0, 7) == "back_d_") {//背景選択時
	//     link.href = target.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
	//     obj_name = target.id
	// }

	// link.download = obj_name + '.png';

	// link.click();
}
function menu3() {//右クリック、消去
	const target = document.getElementById(activeContextId);
	if (target.classList[0] == "sprite") {
		Delete_Obj(target.firstChild);
	} else if (target.classList[0] == "back") {
		Delete_Background(target);
	}
}
function Delete_Background(target) {//背景、消去関数
	delete BackgroundArray[target.id.substring(4, target.id.length)];
	if (Array.from(target.classList).indexOf("is-select-bg") != -1 && Object.keys(BackgroundArray).length > 0) {
		Remove_item_focus(target.id);
		target.classList.remove("is-select-bg");
		document.getElementById("back" + Object.entries(BackgroundArray)[0][0]).classList.add("is-select-bg");
		changeBackgroundImg(Object.entries(BackgroundArray)[0][0]);
	} else if (Object.keys(BackgroundArray).length == 0) {
		canvas.backgroundImage = null;
		canvas.renderAll();
	}
	target.remove();
}

/**
 * プロパティアイテムにイベントを追加する関数
 * @param {string} name イベント追加するelementID 
 */
function Add_property_Event(name) {//プロパティアイテムにイベントを追加する処理
	let target = document.getElementById(name);

	if (target.classList[0] == "sprite") {
		target.addEventListener("click",
			function() {
				if (Array.from(this.classList).indexOf("is-select") == -1) {
					try {
						Remove_item_focus(document.getElementsByClassName("is-select")[0].id);
						let target = document.getElementsByClassName('is-select')[0];
						target.classList.remove('is-select');
					} catch { }
					this.classList.add('is-select');
				}
				try {
					console.log(this.id);
					setObjectData(this.id);
					activeObject(this.id);
				} catch { }
			}
		);
		target.addEventListener('contextmenu',
			function(e) {
				//マウスの位置をstyleへ設定（左上の開始位置を指定）
				document.getElementById('contextmenu').style.left = e.pageX + "px";//ページ全体におけるx
				document.getElementById('contextmenu').style.top = e.pageY + "px";//ページ全体におけるy
				//メニューをblockで表示させる
				document.getElementById('contextmenu').style.display = "block";
				activeContextId = this.id;
			}
		);

	}
	else if (target.classList[0] == "back") {
		target.addEventListener("click",
			function() {
				if (Array.from(this.classList).indexOf("is-select-bg") == -1) {
					Remove_item_focus(document.getElementsByClassName("is-select-bg")[0].id);
					this.classList.add("is-select-bg");
					changeBackgroundImg(this.id.substring(4, this.id.length));
				}

			}
		);
		target.addEventListener("contextmenu",
			function(e) {
				//マウスの位置をstyleへ設定（左上の開始位置を指定）
				document.getElementById('contextmenu').style.left = e.pageX + "px";//ページ全体におけるx
				document.getElementById('contextmenu').style.top = e.pageY + "px";//ページ全体におけるy
				//メニューをblockで表示させる
				document.getElementById('contextmenu').style.display = "block";
				activeContextId = this.id;
			}
		);
	}
}

function Remove_item_focus(name) {
	let target = document.getElementById(name);
	if (target.classList[0] == "sprite") {
		if (Array.from(target.classList).indexOf("is-select") != -1) {
			target.classList.remove("is-select");
		}
	}
	else if (target.classList[0] == "back") {
		if (Array.from(target.classList).indexOf("is-select-bg") != -1) {
			target.classList.remove("is-select-bg");
		}
	}
}
function Set_item_focus(name) {
	let target = document.getElementById(name);
	if (target.classList[0] == "sprite") {
		if (Array.from(target.classList).indexOf("is-select") == -1) {
			target.classList.add("is-select");
		}
	} else if (target.classList[0] == "back") {
		if (Array.from(target.classList).indexOf("is-select-bg") == -1) {
			target.classList.add("is-select-bg");
		}
	}
}

// function Siber_event() {//サイドバー
// 	let arrow = document.querySelectorAll(".arrow");
// 	for (var i = 0; i < arrow.length; i++) {
// 		arrow[i].addEventListener("click", (e) => {
// 			let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
// 			arrowParent.classList.toggle("showMenu");
// 		});
// 	}
// 	let sidebar = document.querySelector(".sidebar");

// 	let headerBtn = document.getElementById("header_bug");
// 	let sidebarBtn = document.getElementById("side_bug");


// 	sidebarBtn.addEventListener("click", () => {
// 		$("body").css("overflow", "")
// 		sidebar.classList.toggle("close");
// 	});
// 	headerBtn.addEventListener("click", () => {
// 		$("body").css("overflow", "hidden")
// 		sidebar.classList.toggle("close");
// 	});
// }
document.addEventListener('DOMContentLoaded', function() {//タブ
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('tab');
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

	// タブをクリックすると実行する関数
	function tabSwitch() {

		// タブのclassの値を変更
		document.getElementsByClassName('is-active')[0].classList.remove('is-active');
		this.classList.add('is-active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('is-show')[0].classList.remove('is-show');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')[index].classList.add('is-show');
		//リサイズした状態でのパネル変更を行った際のバグを解消
		if (document.getElementsByClassName('panel')[index].classList.value == "panel tab-A is-show") {
			workspace.setVisible(true);
			Blockly.svgResize(workspace);
		} else {
			workspace.setVisible(false);
		}

	};
}, false);
let outputJson;
/**
 * 保存
 */
function save() {
	const savename = window.prompt("保存名を入力してください");

	if (savename != null) {
		const XMLcode = Blockly.Xml.workspaceToDom(workspace);
		let postJsonCollection = saveCanvas();
		postJsonCollection["blockly"] = Blockly.Xml.domToText(XMLcode);
		postJsonCollection["savename"] = savename;
		console.log(postJsonCollection);
		outputJson = JSON.stringify(postJsonCollection);
		console.log(outputJson);

		var token = $("meta[name='_csrf']").attr("content");
		var header = $("meta[name='_csrf_header']").attr("content");

		$(document).ajaxSend(function(e, xhr, options) {
			xhr.setRequestHeader(header, token);
		});

		$.ajax({
			url: "http://localhost:8080/create/send",
			type: "POST",
			data: outputJson,
			contentType: 'application/json',
			dataType: "json"  // レスポンスデータをjson形式と指定する
		})
			.done(function(data, textStatus, jqXHR) {
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				alert("error!");
			})
	}
}


/**
 * 復元
 */
function restore() {//復元
	if (inputJson != null) {
		//const inputJson = JSON.parse(inputJson);
		//BlocklyWorkspaceの復元
		const xml = Blockly.Xml.textToDom(inputJson["blockly"]);
		workspace.clear();
		Blockly.Xml.domToWorkspace(xml, workspace);

		checkName = inputJson["check_name"];
		BackgroundArray = inputJson["background_src"];
		back_cnt = inputJson["background_cnt"]
		canvas.loadFromJSON(JSON.stringify(inputJson["object_data"]));
		canvas.renderAll();

		const objectsNode = document.getElementById("objects");
		while (objectsNode.firstChild) {
			objectsNode.removeChild(objectsNode.firstChild);
			console.log("ok2");
		}
		const backgroundNode = document.getElementById("BGinformation").children;
		for (let children of backgroundNode) {
			if (children.id != "bg_div") {
				console.log(children);
				backgroundNode.removeChild(children);
			}
		}
		for (let key in inputJson["object_data"]["objects"]) {
			set_box_spr(inputJson["object_data"]["objects"][key].id, inputJson["object_data"]["objects"][key].src, inputJson["object_data"]["objects"][key].width, inputJson["object_data"]["objects"][key].height);
		}
		back_cnt = inputJson["background_cnt"];
		for (let key in inputJson["background_src"]) {
			set_bginfo_img_back(inputJson["background_src"][key].src, inputJson["background_src"][key].width, inputJson["background_src"][key].height, key);
		}

	}
}


//キャンバス用関数
/**
 * オブジェクトを選択状態にする関数
 * @param {string} id オブジェクトID
 */
function activeObject(id) {
	canvas.discardActiveObject();
	canvas.renderAll();
	let active = getObject(id);

	canvas.setActiveObject(active);
	canvas.renderAll();
}
/**
 * オブジェクトデータを画面に表示関数
 * @param {string} id オブジェクトID
 */
function setObjectData(id) {//オブジェクトデータを画面に表示処理
	let object = getObject(id);
	if (object != null) {
		inputName.value = object.id;
		inputName.dataset.name = object.id;
		inputSizeX.value = Math.round(object.scaleX * 100000) / 100000 * 100;
		inputSizeY.value = Math.round(object.scaleY * 100000) / 100000 * 100;
		Angles.value = Math.round(object.angle * 100000) / 100000;
		inputPositionX.value = Math.round(object.left * 100000) / 100000;
		inputPositionY.value = Math.round(object.top * 100000) / 100000;
		if (object.visible) {
			document.getElementById("sample1on").checked = true;
			document.getElementById("sample1off").checked = false;
		} else {
			document.getElementById("sample1on").checked = false;
			document.getElementById("sample1off").checked = true;
		}
	}
}
/**
 * idに対応するオブジェクトを取得
 * @param {string} id オブジェクトID
 */
function getObject(id) {
	let active = null;
	canvas.getObjects().forEach(function(element) {
		if (element.id == id) {
			active = element;
			return;
		}
	});
	return active;
}
/**
 * 表示、非表示処理
 * @param {string} id オブジェクトID
 */
function noneObject(id) {
	let object = getObject(id);
	if (object != null) {
		object.visible = !object.visible;
		canvas.discardActiveObject();
		canvas.renderAll();
	}
}
/**
 *オブジェクト消去関数
 * @param {string} id オブジェクトID
 */
function deleteObj(id) {
	let obj = getObject(id);
	if (obj != null) {
		canvas.remove(obj);
		checkName.splice(checkName.indexOf(id), 1);
	}
}
function dataClear() {//オブジェクトデータを画面に表示処理※いらないかも
	inputName.value = "";
	// inputSizeX.value = object.scaleX * 100;
	// inputSizeY.value = object.scaleY * 100;
	Angles.value = null;
	inputPositionX.value = null;
	inputPositionY.value = null;
}
//テスト用
var object_json;
var json2;
var json3;
function saveCanvas() {//josn保存処理
	return {
		object_data: canvas.toJSON(['id']),
		check_name: checkName,
		background_src: BackgroundArray,
		background_cnt: back_cnt
	};
}
function loadCanvas(json) {//josn読み込み処理
	canvas.loadFromJSON(json);
	canvas.renderAll();

	checkName = JSON.parse(json2);
}