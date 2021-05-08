import { Duck, ModelDuck } from "./duck";
import { FlyRocketPowered } from "./fly-behavior";

const model: Duck = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
