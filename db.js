import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mockgoose from 'mockgoose';
const DB_URI=dotenv.config().parsed.CONNECTION_URL;
const Mockgoose=mockgoose.Mockgoose;
export const connect=()=> {

  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV === 'test') {
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage()
        .then(() => {
          mongoose.connect(DB_URI,
            { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true})
            .then((res, err) => {
              if (err) return reject(err);
              resolve();
            })
        })
    } else {
        mongoose.connect(DB_URI,
          { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology:true})
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          });
          mongoose.set('useFindAndModify', false);
    }
  });
}

export const close=()=> {
  return mongoose.disconnect();
}
