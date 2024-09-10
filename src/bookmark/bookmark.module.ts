import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkSchema, BookmarkSchemaFactory } from './bookmark.schema';
import { BookmarkController } from './bookmark.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BookmarkSchema', schema: BookmarkSchemaFactory },
    ]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
