import 'package:flutter/material.dart';
import 'package:flutter_initial_app/main.dart' as app;
import 'package:flutter_initial_app/screens/comments_screen.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  // TestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('Stress Test:Posting comments', (tester) async {
    app.main();
  
  }, timeout: Timeout.none);
}
