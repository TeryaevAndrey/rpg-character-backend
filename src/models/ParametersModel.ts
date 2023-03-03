import mongoose, { Schema, model } from "mongoose";

interface IParameters {
  userId: string;
  saveName: string;

  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  lifeForce: number;
  evasion: number;
  energy: number;

  attack: {
    value: number;
    level: number;
  };
  stels: {
    value: number;
    level: number;
  };
  shooting: {
    value: number;
    level: number;
  };
  learnability: {
    value: number;
    level: number;
  };
  survival: {
    value: number;
    level: number;
  };
  medicine: {
    value: number;
    level: number;
  };
  intimidation: {
    value: number;
    level: number;
  };
  insight: {
    value: number;
    level: number;
  };
  appearance: {
    value: number;
    level: number;
  };
  manipulation: {
    value: number;
    level: number;
  };
}

const ParameterSchema = new Schema<IParameters>({
  userId: {type: String, required: true},
  saveName: {type: String, required: true},
  power: { type: Number },
  dexterity: { type: Number },
  intelligence: { type: Number },
  charisma: { type: Number },
  lifeForce: { type: Number },
  evasion: { type: Number },
  energy: { type: Number },
  attack: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  stels: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  shooting: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  learnability: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  survival: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  medicine: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  intimidation: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  insight: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  appearance: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  manipulation: {
    value: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
});

const ParameterModel = model("Parameter", ParameterSchema);

export default mongoose.models.Parameter || ParameterModel;
