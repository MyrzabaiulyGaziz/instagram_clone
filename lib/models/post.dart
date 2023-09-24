import 'dart:convert';
import 'package:cloud_firestore/cloud_firestore.dart';

// ignore_for_file: public_member_api_docs, sort_constructors_first
class Post {
  final String? description;
  final String? uid;
  final String? postId;
  final String? username;
  final datePublished;
  final String? postUrl;
  final String? profImage;
  final likes;

  Post({
    required this.description,
    required this.postId,
    required this.datePublished,
    required this.postUrl,
    required this.profImage,
    required this.likes,
    required this.uid,
    required this.username,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'description': description,
      'uid': uid,
      'postId': postId,
      'username': username,
      'datePublished': datePublished,
      'profImage': profImage,
      'postUrl': postUrl,
      'likes': likes,
    };
  }

  factory Post.fromMap(Map<String, dynamic> map) {
    return Post(
        description: map['description'] as String,
        uid: map['uid'] as String,
        postId: map['postId'] as String,
        username: map['username'] as String,
        datePublished: map['datePublished'],
        profImage: map['profImage'] as String,
        postUrl: map['postUrl'] as String,
        likes: null);
  }

  String toJson() => json.encode(toMap());

  factory Post.fromJson(String source) =>
      Post.fromMap(json.decode(source) as Map<String, dynamic>);

  static Post fromSnap(DocumentSnapshot snap) {
    var snapshot = snap.data() as Map<String, dynamic>;
    return Post(
        username: snapshot['username'],
        uid: snapshot['uid'],
        description: snapshot['description'],
        postId: snapshot['postId'],
        datePublished: snapshot['datePublished'],
        profImage: snapshot['profImage'],
        likes: snapshot['likes'],
        postUrl: snapshot['postUrl']);
  }
}
