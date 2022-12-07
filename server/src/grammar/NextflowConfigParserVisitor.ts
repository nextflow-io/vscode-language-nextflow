// Generated from server/src/grammar/NextflowConfigParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { GroovyParser } from './GroovyParser';


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IdentifierPrmrAltContext } from "./NextflowConfigParser";
import { LiteralPrmrAltContext } from "./NextflowConfigParser";
import { GstringPrmrAltContext } from "./NextflowConfigParser";
import { NewPrmrAltContext } from "./NextflowConfigParser";
import { ThisPrmrAltContext } from "./NextflowConfigParser";
import { SuperPrmrAltContext } from "./NextflowConfigParser";
import { ParenPrmrAltContext } from "./NextflowConfigParser";
import { ClosureOrLambdaExpressionPrmrAltContext } from "./NextflowConfigParser";
import { ListPrmrAltContext } from "./NextflowConfigParser";
import { MapPrmrAltContext } from "./NextflowConfigParser";
import { BuiltInTypePrmrAltContext } from "./NextflowConfigParser";
import { IntegerLiteralAltContext } from "./NextflowConfigParser";
import { FloatingPointLiteralAltContext } from "./NextflowConfigParser";
import { StringLiteralAltContext } from "./NextflowConfigParser";
import { BooleanLiteralAltContext } from "./NextflowConfigParser";
import { NullLiteralAltContext } from "./NextflowConfigParser";
import { CastExprAltContext } from "./NextflowConfigParser";
import { PostfixExprAltContext } from "./NextflowConfigParser";
import { UnaryNotExprAltContext } from "./NextflowConfigParser";
import { PowerExprAltContext } from "./NextflowConfigParser";
import { UnaryAddExprAltContext } from "./NextflowConfigParser";
import { MultiplicativeExprAltContext } from "./NextflowConfigParser";
import { AdditiveExprAltContext } from "./NextflowConfigParser";
import { ShiftExprAltContext } from "./NextflowConfigParser";
import { RelationalExprAltContext } from "./NextflowConfigParser";
import { EqualityExprAltContext } from "./NextflowConfigParser";
import { RegexExprAltContext } from "./NextflowConfigParser";
import { AndExprAltContext } from "./NextflowConfigParser";
import { ExclusiveOrExprAltContext } from "./NextflowConfigParser";
import { InclusiveOrExprAltContext } from "./NextflowConfigParser";
import { LogicalAndExprAltContext } from "./NextflowConfigParser";
import { LogicalOrExprAltContext } from "./NextflowConfigParser";
import { ConditionalExprAltContext } from "./NextflowConfigParser";
import { MultipleAssignmentExprAltContext } from "./NextflowConfigParser";
import { AssignmentExprAltContext } from "./NextflowConfigParser";
import { BlockStmtAltContext } from "./NextflowConfigParser";
import { ConditionalStmtAltContext } from "./NextflowConfigParser";
import { LoopStmtAltContext } from "./NextflowConfigParser";
import { TryCatchStmtAltContext } from "./NextflowConfigParser";
import { SynchronizedStmtAltContext } from "./NextflowConfigParser";
import { ReturnStmtAltContext } from "./NextflowConfigParser";
import { ThrowStmtAltContext } from "./NextflowConfigParser";
import { BreakStmtAltContext } from "./NextflowConfigParser";
import { ContinueStmtAltContext } from "./NextflowConfigParser";
import { LabeledStmtAltContext } from "./NextflowConfigParser";
import { AssertStmtAltContext } from "./NextflowConfigParser";
import { LocalVariableDeclarationStmtAltContext } from "./NextflowConfigParser";
import { ExpressionStmtAltContext } from "./NextflowConfigParser";
import { EmptyStmtAltContext } from "./NextflowConfigParser";
import { CommandExprAltContext } from "./NextflowConfigParser";
import { ForStmtAltContext } from "./NextflowConfigParser";
import { WhileStmtAltContext } from "./NextflowConfigParser";
import { DoWhileStmtAltContext } from "./NextflowConfigParser";
import { CompilationUnitContext } from "./NextflowConfigParser";
import { ConfigStatementsContext } from "./NextflowConfigParser";
import { ConfigStatementContext } from "./NextflowConfigParser";
import { ConfigIncludeStatementContext } from "./NextflowConfigParser";
import { ConfigAssignmentContext } from "./NextflowConfigParser";
import { ConfigPathExpressionContext } from "./NextflowConfigParser";
import { ConfigBlockContext } from "./NextflowConfigParser";
import { ConfigBlockStatementContext } from "./NextflowConfigParser";
import { ProcessSelectorContext } from "./NextflowConfigParser";
import { ScriptStatementsContext } from "./NextflowConfigParser";
import { ScriptStatementContext } from "./NextflowConfigParser";
import { PackageDeclarationContext } from "./NextflowConfigParser";
import { ImportDeclarationContext } from "./NextflowConfigParser";
import { TypeDeclarationContext } from "./NextflowConfigParser";
import { ModifierContext } from "./NextflowConfigParser";
import { ModifiersOptContext } from "./NextflowConfigParser";
import { ModifiersContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifiersOptContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifiersContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifierContext } from "./NextflowConfigParser";
import { VariableModifierContext } from "./NextflowConfigParser";
import { VariableModifiersOptContext } from "./NextflowConfigParser";
import { VariableModifiersContext } from "./NextflowConfigParser";
import { TypeParametersContext } from "./NextflowConfigParser";
import { TypeParameterContext } from "./NextflowConfigParser";
import { TypeBoundContext } from "./NextflowConfigParser";
import { TypeListContext } from "./NextflowConfigParser";
import { ClassDeclarationContext } from "./NextflowConfigParser";
import { ClassBodyContext } from "./NextflowConfigParser";
import { EnumConstantsContext } from "./NextflowConfigParser";
import { EnumConstantContext } from "./NextflowConfigParser";
import { ClassBodyDeclarationContext } from "./NextflowConfigParser";
import { MemberDeclarationContext } from "./NextflowConfigParser";
import { MethodDeclarationContext } from "./NextflowConfigParser";
import { MethodNameContext } from "./NextflowConfigParser";
import { ReturnTypeContext } from "./NextflowConfigParser";
import { FieldDeclarationContext } from "./NextflowConfigParser";
import { VariableDeclaratorsContext } from "./NextflowConfigParser";
import { VariableDeclaratorContext } from "./NextflowConfigParser";
import { VariableDeclaratorIdContext } from "./NextflowConfigParser";
import { VariableInitializerContext } from "./NextflowConfigParser";
import { VariableInitializersContext } from "./NextflowConfigParser";
import { EmptyDimsContext } from "./NextflowConfigParser";
import { EmptyDimsOptContext } from "./NextflowConfigParser";
import { TypeContext } from "./NextflowConfigParser";
import { ClassOrInterfaceTypeContext } from "./NextflowConfigParser";
import { PrimitiveTypeContext } from "./NextflowConfigParser";
import { TypeArgumentsContext } from "./NextflowConfigParser";
import { TypeArgumentContext } from "./NextflowConfigParser";
import { AnnotatedQualifiedClassNameContext } from "./NextflowConfigParser";
import { QualifiedClassNameListContext } from "./NextflowConfigParser";
import { FormalParametersContext } from "./NextflowConfigParser";
import { FormalParameterListContext } from "./NextflowConfigParser";
import { ThisFormalParameterContext } from "./NextflowConfigParser";
import { FormalParameterContext } from "./NextflowConfigParser";
import { MethodBodyContext } from "./NextflowConfigParser";
import { QualifiedNameContext } from "./NextflowConfigParser";
import { QualifiedNameElementContext } from "./NextflowConfigParser";
import { QualifiedNameElementsContext } from "./NextflowConfigParser";
import { QualifiedClassNameContext } from "./NextflowConfigParser";
import { QualifiedStandardClassNameContext } from "./NextflowConfigParser";
import { LiteralContext } from "./NextflowConfigParser";
import { GstringContext } from "./NextflowConfigParser";
import { GstringValueContext } from "./NextflowConfigParser";
import { GstringPathContext } from "./NextflowConfigParser";
import { StandardLambdaExpressionContext } from "./NextflowConfigParser";
import { StandardLambdaParametersContext } from "./NextflowConfigParser";
import { LambdaBodyContext } from "./NextflowConfigParser";
import { ClosureContext } from "./NextflowConfigParser";
import { ClosureOrLambdaExpressionContext } from "./NextflowConfigParser";
import { BlockStatementsOptContext } from "./NextflowConfigParser";
import { BlockStatementsContext } from "./NextflowConfigParser";
import { AnnotationsOptContext } from "./NextflowConfigParser";
import { AnnotationContext } from "./NextflowConfigParser";
import { ElementValuesContext } from "./NextflowConfigParser";
import { AnnotationNameContext } from "./NextflowConfigParser";
import { ElementValuePairsContext } from "./NextflowConfigParser";
import { ElementValuePairContext } from "./NextflowConfigParser";
import { ElementValuePairNameContext } from "./NextflowConfigParser";
import { ElementValueContext } from "./NextflowConfigParser";
import { ElementValueArrayInitializerContext } from "./NextflowConfigParser";
import { BlockContext } from "./NextflowConfigParser";
import { BlockStatementContext } from "./NextflowConfigParser";
import { LocalVariableDeclarationContext } from "./NextflowConfigParser";
import { VariableDeclarationContext } from "./NextflowConfigParser";
import { TypeNamePairsContext } from "./NextflowConfigParser";
import { TypeNamePairContext } from "./NextflowConfigParser";
import { VariableNamesContext } from "./NextflowConfigParser";
import { ConditionalStatementContext } from "./NextflowConfigParser";
import { IfElseStatementContext } from "./NextflowConfigParser";
import { SwitchStatementContext } from "./NextflowConfigParser";
import { LoopStatementContext } from "./NextflowConfigParser";
import { ContinueStatementContext } from "./NextflowConfigParser";
import { BreakStatementContext } from "./NextflowConfigParser";
import { TryCatchStatementContext } from "./NextflowConfigParser";
import { AssertStatementContext } from "./NextflowConfigParser";
import { StatementContext } from "./NextflowConfigParser";
import { CatchClauseContext } from "./NextflowConfigParser";
import { CatchTypeContext } from "./NextflowConfigParser";
import { FinallyBlockContext } from "./NextflowConfigParser";
import { ResourcesContext } from "./NextflowConfigParser";
import { ResourceListContext } from "./NextflowConfigParser";
import { ResourceContext } from "./NextflowConfigParser";
import { SwitchBlockStatementGroupContext } from "./NextflowConfigParser";
import { SwitchLabelContext } from "./NextflowConfigParser";
import { ForControlContext } from "./NextflowConfigParser";
import { EnhancedForControlContext } from "./NextflowConfigParser";
import { ClassicalForControlContext } from "./NextflowConfigParser";
import { ForInitContext } from "./NextflowConfigParser";
import { ForUpdateContext } from "./NextflowConfigParser";
import { CastParExpressionContext } from "./NextflowConfigParser";
import { ParExpressionContext } from "./NextflowConfigParser";
import { ExpressionInParContext } from "./NextflowConfigParser";
import { ExpressionListContext } from "./NextflowConfigParser";
import { ExpressionListElementContext } from "./NextflowConfigParser";
import { EnhancedStatementExpressionContext } from "./NextflowConfigParser";
import { StatementExpressionContext } from "./NextflowConfigParser";
import { PostfixExpressionContext } from "./NextflowConfigParser";
import { ExpressionContext } from "./NextflowConfigParser";
import { CommandExpressionContext } from "./NextflowConfigParser";
import { CommandArgumentContext } from "./NextflowConfigParser";
import { PathExpressionContext } from "./NextflowConfigParser";
import { PathElementContext } from "./NextflowConfigParser";
import { NamePartContext } from "./NextflowConfigParser";
import { DynamicMemberNameContext } from "./NextflowConfigParser";
import { IndexPropertyArgsContext } from "./NextflowConfigParser";
import { NamedPropertyArgsContext } from "./NextflowConfigParser";
import { PrimaryContext } from "./NextflowConfigParser";
import { ListContext } from "./NextflowConfigParser";
import { MapContext } from "./NextflowConfigParser";
import { MapEntryListContext } from "./NextflowConfigParser";
import { MapEntryContext } from "./NextflowConfigParser";
import { MapEntryLabelContext } from "./NextflowConfigParser";
import { CreatorContext } from "./NextflowConfigParser";
import { DimContext } from "./NextflowConfigParser";
import { ArrayInitializerContext } from "./NextflowConfigParser";
import { AnonymousInnerClassDeclarationContext } from "./NextflowConfigParser";
import { CreatedNameContext } from "./NextflowConfigParser";
import { NonWildcardTypeArgumentsContext } from "./NextflowConfigParser";
import { TypeArgumentsOrDiamondContext } from "./NextflowConfigParser";
import { ArgumentsContext } from "./NextflowConfigParser";
import { EnhancedArgumentListInParContext } from "./NextflowConfigParser";
import { EnhancedArgumentListElementContext } from "./NextflowConfigParser";
import { StringLiteralContext } from "./NextflowConfigParser";
import { ClassNameContext } from "./NextflowConfigParser";
import { IdentifierContext } from "./NextflowConfigParser";
import { BuiltInTypeContext } from "./NextflowConfigParser";
import { KeywordsContext } from "./NextflowConfigParser";
import { RparenContext } from "./NextflowConfigParser";
import { NlsContext } from "./NextflowConfigParser";
import { SepContext } from "./NextflowConfigParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NextflowConfigParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NextflowConfigParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewPrmrAlt?: (ctx: NewPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPrmrAlt?: (ctx: ListPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPrmrAlt?: (ctx: MapPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralAlt?: (ctx: StringLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteralAlt?: (ctx: NullLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprAlt?: (ctx: CastExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExprAlt?: (ctx: PostfixExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExprAlt?: (ctx: PowerExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExprAlt?: (ctx: ShiftExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExprAlt?: (ctx: RelationalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExprAlt?: (ctx: EqualityExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexExprAlt?: (ctx: RegexExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExprAlt?: (ctx: AndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmtAlt?: (ctx: BlockStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmtAlt?: (ctx: LoopStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmtAlt?: (ctx: BreakStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStmtAlt?: (ctx: AssertStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExprAlt?: (ctx: CommandExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmtAlt?: (ctx: ForStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmtAlt?: (ctx: WhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigStatements?: (ctx: ConfigStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigStatement?: (ctx: ConfigStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configIncludeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigIncludeStatement?: (ctx: ConfigIncludeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigAssignment?: (ctx: ConfigAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configPathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigPathExpression?: (ctx: ConfigPathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigBlock?: (ctx: ConfigBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.configBlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigBlockStatement?: (ctx: ConfigBlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.processSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessSelector?: (ctx: ProcessSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.scriptStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatements?: (ctx: ScriptStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.scriptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatement?: (ctx: ScriptStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.modifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersOpt?: (ctx: ModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableInitializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializers?: (ctx: VariableInitializersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.emptyDims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDims?: (ctx: EmptyDimsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisFormalParameter?: (ctx: ThisFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassName?: (ctx: QualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.gstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstring?: (ctx: GstringContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.gstringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringValue?: (ctx: GstringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.gstringPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPath?: (ctx: GstringPathContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure?: (ctx: ClosureContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.annotationsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationsOpt?: (ctx: AnnotationsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValues?: (ctx: ElementValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValuePairName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairName?: (ctx: ElementValuePairNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeNamePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePairs?: (ctx: TypeNamePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePair?: (ctx: TypeNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.variableNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableNames?: (ctx: VariableNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.classicalForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassicalForControl?: (ctx: ClassicalForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.castParExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastParExpression?: (ctx: CastParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.expressionInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionInPar?: (ctx: ExpressionInParContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.expressionListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListElement?: (ctx: ExpressionListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.commandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExpression?: (ctx: CommandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.commandArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandArgument?: (ctx: CommandArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.pathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression?: (ctx: PathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.namePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamePart?: (ctx: NamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicMemberName?: (ctx: DynamicMemberNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.mapEntryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryList?: (ctx: MapEntryListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.mapEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntry?: (ctx: MapEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryLabel?: (ctx: MapEntryLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.dim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim?: (ctx: DimContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.rparen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRparen?: (ctx: RparenContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.nls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNls?: (ctx: NlsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowConfigParser.sep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSep?: (ctx: SepContext) => Result;
}

