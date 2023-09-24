import 'package:flutter/material.dart';
import 'package:flutter_initial_app/main.dart' as app;
import 'package:flutter_initial_app/screens/comments_screen.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  // TestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('Stress Test:Posting comments', (tester) async {
    app.main();
    await tester.pumpAndSettle();
    await Future.delayed(const Duration(seconds: 1));
    await tester.tap(find.byKey(const ValueKey('comment_button')));
    await tester.pumpAndSettle();
    await Future.delayed(const Duration(seconds: 1));
    await tester.enterText(find.byType(TextField), 'text');
    await tester.pumpAndSettle();
    await Future.delayed(const Duration(seconds: 1));
    await tester.tap(find.byKey(const Key('post_button')));
    await tester.pumpAndSettle();
    await Future.delayed(const Duration(seconds: 1));
    expect(find.byType(CommentsScreen), findsOneWidget);
  }, timeout: Timeout.none);
}
