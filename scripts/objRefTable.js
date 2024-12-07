const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.custom,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{НастраиваемоеДвижение: 0},
	{куб: 0},
	{Платформер: 0},
	{шар: 0},
	{Твёрдый: 0},
	{стена: 0},
	{Тач: 0},
	{Прикрепить: 0},
	{шип: 0}
];

self.InstanceType = {
	куб: class extends self.ISpriteInstance {},
	шар: class extends self.ISpriteInstance {},
	стена: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	шип: class extends self.ISpriteInstance {}
}