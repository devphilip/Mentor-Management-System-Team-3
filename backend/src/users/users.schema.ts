import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Iimage } from "./interface/image.interface";
import { ISocials } from "./interface/socials.interface";

export enum ROLE {
  ADMIN = "admin",
}

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  autoIndex: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User {
  @Prop({ lowercase: true })
  firstName: string;

  @Prop({ lowercase: true })
  lastName: string;

  @Prop({ lowercase: true })
  email: string;

  @Prop()
  uid: string;

  @Prop(
    raw({
      url: String,
      publicId: { type: String },
    }),
  )
  avatar: Iimage;

  @Prop()
  bio: string;

  @Prop({ lowercase: true })
  country: string;

  @Prop({ lowercase: true })
  city: string;

  @Prop({ lowercase: true })
  website: string;

  @Prop(
    raw({
      github: { type: String, lowercase: true },
      linkedin: { type: String, lowercase: true },
      twitter: { type: String, lowercase: true },
      instagram: { type: String, lowercase: true },
    }),
  )
  socials: ISocials;

  @Prop({ type: MongooseSchema.Types.ObjectId, sparse: true })
  createdBy: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, sparse: true })
  updatedBy: MongooseSchema.Types.ObjectId;

  @Prop({ default: ROLE.ADMIN })
  role: ROLE;
}

export const UserSchema = SchemaFactory.createForClass(User);
