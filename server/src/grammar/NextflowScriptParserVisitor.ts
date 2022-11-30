// Generated from src/grammar/NextflowScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { GroovyParser } from './GroovyParser';




import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IdentifierPrmrAltContext } from "./NextflowScriptParser";
import { LiteralPrmrAltContext } from "./NextflowScriptParser";
import { GstringPrmrAltContext } from "./NextflowScriptParser";
import { NewPrmrAltContext } from "./NextflowScriptParser";
import { ThisPrmrAltContext } from "./NextflowScriptParser";
import { SuperPrmrAltContext } from "./NextflowScriptParser";
import { ParenPrmrAltContext } from "./NextflowScriptParser";
import { ClosureOrLambdaExpressionPrmrAltContext } from "./NextflowScriptParser";
import { ListPrmrAltContext } from "./NextflowScriptParser";
import { MapPrmrAltContext } from "./NextflowScriptParser";
import { BuiltInTypePrmrAltContext } from "./NextflowScriptParser";
import { IntegerLiteralAltContext } from "./NextflowScriptParser";
import { FloatingPointLiteralAltContext } from "./NextflowScriptParser";
import { StringLiteralAltContext } from "./NextflowScriptParser";
import { BooleanLiteralAltContext } from "./NextflowScriptParser";
import { NullLiteralAltContext } from "./NextflowScriptParser";
import { CastExprAltContext } from "./NextflowScriptParser";
import { PostfixExprAltContext } from "./NextflowScriptParser";
import { SwitchExprAltContext } from "./NextflowScriptParser";
import { UnaryNotExprAltContext } from "./NextflowScriptParser";
import { PowerExprAltContext } from "./NextflowScriptParser";
import { UnaryAddExprAltContext } from "./NextflowScriptParser";
import { MultiplicativeExprAltContext } from "./NextflowScriptParser";
import { AdditiveExprAltContext } from "./NextflowScriptParser";
import { ShiftExprAltContext } from "./NextflowScriptParser";
import { RelationalExprAltContext } from "./NextflowScriptParser";
import { EqualityExprAltContext } from "./NextflowScriptParser";
import { RegexExprAltContext } from "./NextflowScriptParser";
import { AndExprAltContext } from "./NextflowScriptParser";
import { ExclusiveOrExprAltContext } from "./NextflowScriptParser";
import { InclusiveOrExprAltContext } from "./NextflowScriptParser";
import { LogicalAndExprAltContext } from "./NextflowScriptParser";
import { LogicalOrExprAltContext } from "./NextflowScriptParser";
import { ConditionalExprAltContext } from "./NextflowScriptParser";
import { MultipleAssignmentExprAltContext } from "./NextflowScriptParser";
import { AssignmentExprAltContext } from "./NextflowScriptParser";
import { BlockStmtAltContext } from "./NextflowScriptParser";
import { ConditionalStmtAltContext } from "./NextflowScriptParser";
import { LoopStmtAltContext } from "./NextflowScriptParser";
import { TryCatchStmtAltContext } from "./NextflowScriptParser";
import { SynchronizedStmtAltContext } from "./NextflowScriptParser";
import { ReturnStmtAltContext } from "./NextflowScriptParser";
import { ThrowStmtAltContext } from "./NextflowScriptParser";
import { BreakStmtAltContext } from "./NextflowScriptParser";
import { ContinueStmtAltContext } from "./NextflowScriptParser";
import { YieldStmtAltContext } from "./NextflowScriptParser";
import { LabeledStmtAltContext } from "./NextflowScriptParser";
import { AssertStmtAltContext } from "./NextflowScriptParser";
import { LocalVariableDeclarationStmtAltContext } from "./NextflowScriptParser";
import { ExpressionStmtAltContext } from "./NextflowScriptParser";
import { EmptyStmtAltContext } from "./NextflowScriptParser";
import { CommandExprAltContext } from "./NextflowScriptParser";
import { ForStmtAltContext } from "./NextflowScriptParser";
import { WhileStmtAltContext } from "./NextflowScriptParser";
import { DoWhileStmtAltContext } from "./NextflowScriptParser";
import { CompilationUnitContext } from "./NextflowScriptParser";
import { ScriptStatementContext } from "./NextflowScriptParser";
import { IncludeStatementContext } from "./NextflowScriptParser";
import { IncludeNamesContext } from "./NextflowScriptParser";
import { IncludeNameContext } from "./NextflowScriptParser";
import { ProcessDefContext } from "./NextflowScriptParser";
import { ProcessStatementContext } from "./NextflowScriptParser";
import { ProcessDirectiveContext } from "./NextflowScriptParser";
import { ProcessInputContext } from "./NextflowScriptParser";
import { ProcessInputTypeContext } from "./NextflowScriptParser";
import { ProcessInputValContext } from "./NextflowScriptParser";
import { ProcessInputEnvContext } from "./NextflowScriptParser";
import { ProcessInputFileContext } from "./NextflowScriptParser";
import { ProcessInputPathContext } from "./NextflowScriptParser";
import { ProcessInputStdinContext } from "./NextflowScriptParser";
import { ProcessInputExprContext } from "./NextflowScriptParser";
import { ProcessInputTupleContext } from "./NextflowScriptParser";
import { ProcessOutputContext } from "./NextflowScriptParser";
import { ProcessOutputTypeContext } from "./NextflowScriptParser";
import { ProcessOutputValContext } from "./NextflowScriptParser";
import { ProcessOutputEnvContext } from "./NextflowScriptParser";
import { ProcessOutputFileContext } from "./NextflowScriptParser";
import { ProcessOutputPathContext } from "./NextflowScriptParser";
import { ProcessOutputStdoutContext } from "./NextflowScriptParser";
import { ProcessOutputExprContext } from "./NextflowScriptParser";
import { ProcessOutputTupleContext } from "./NextflowScriptParser";
import { WorkflowDefContext } from "./NextflowScriptParser";
import { WorkflowBodyContext } from "./NextflowScriptParser";
import { ScriptStatementsContext } from "./NextflowScriptParser";
import { PackageDeclarationContext } from "./NextflowScriptParser";
import { ImportDeclarationContext } from "./NextflowScriptParser";
import { TypeDeclarationContext } from "./NextflowScriptParser";
import { ModifierContext } from "./NextflowScriptParser";
import { ModifiersOptContext } from "./NextflowScriptParser";
import { ModifiersContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifiersOptContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifiersContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifierContext } from "./NextflowScriptParser";
import { VariableModifierContext } from "./NextflowScriptParser";
import { VariableModifiersOptContext } from "./NextflowScriptParser";
import { VariableModifiersContext } from "./NextflowScriptParser";
import { TypeParametersContext } from "./NextflowScriptParser";
import { TypeParameterContext } from "./NextflowScriptParser";
import { TypeBoundContext } from "./NextflowScriptParser";
import { TypeListContext } from "./NextflowScriptParser";
import { ClassDeclarationContext } from "./NextflowScriptParser";
import { ClassBodyContext } from "./NextflowScriptParser";
import { EnumConstantsContext } from "./NextflowScriptParser";
import { EnumConstantContext } from "./NextflowScriptParser";
import { ClassBodyDeclarationContext } from "./NextflowScriptParser";
import { MemberDeclarationContext } from "./NextflowScriptParser";
import { MethodDeclarationContext } from "./NextflowScriptParser";
import { CompactConstructorDeclarationContext } from "./NextflowScriptParser";
import { MethodNameContext } from "./NextflowScriptParser";
import { ReturnTypeContext } from "./NextflowScriptParser";
import { FieldDeclarationContext } from "./NextflowScriptParser";
import { VariableDeclaratorsContext } from "./NextflowScriptParser";
import { VariableDeclaratorContext } from "./NextflowScriptParser";
import { VariableDeclaratorIdContext } from "./NextflowScriptParser";
import { VariableInitializerContext } from "./NextflowScriptParser";
import { VariableInitializersContext } from "./NextflowScriptParser";
import { EmptyDimsContext } from "./NextflowScriptParser";
import { EmptyDimsOptContext } from "./NextflowScriptParser";
import { TypeContext } from "./NextflowScriptParser";
import { ClassOrInterfaceTypeContext } from "./NextflowScriptParser";
import { PrimitiveTypeContext } from "./NextflowScriptParser";
import { TypeArgumentsContext } from "./NextflowScriptParser";
import { TypeArgumentContext } from "./NextflowScriptParser";
import { AnnotatedQualifiedClassNameContext } from "./NextflowScriptParser";
import { QualifiedClassNameListContext } from "./NextflowScriptParser";
import { FormalParametersContext } from "./NextflowScriptParser";
import { FormalParameterListContext } from "./NextflowScriptParser";
import { ThisFormalParameterContext } from "./NextflowScriptParser";
import { FormalParameterContext } from "./NextflowScriptParser";
import { MethodBodyContext } from "./NextflowScriptParser";
import { QualifiedNameContext } from "./NextflowScriptParser";
import { QualifiedNameElementContext } from "./NextflowScriptParser";
import { QualifiedNameElementsContext } from "./NextflowScriptParser";
import { QualifiedClassNameContext } from "./NextflowScriptParser";
import { QualifiedStandardClassNameContext } from "./NextflowScriptParser";
import { LiteralContext } from "./NextflowScriptParser";
import { GstringContext } from "./NextflowScriptParser";
import { GstringValueContext } from "./NextflowScriptParser";
import { GstringPathContext } from "./NextflowScriptParser";
import { StandardLambdaExpressionContext } from "./NextflowScriptParser";
import { StandardLambdaParametersContext } from "./NextflowScriptParser";
import { LambdaBodyContext } from "./NextflowScriptParser";
import { ClosureContext } from "./NextflowScriptParser";
import { ClosureOrLambdaExpressionContext } from "./NextflowScriptParser";
import { BlockStatementsOptContext } from "./NextflowScriptParser";
import { BlockStatementsContext } from "./NextflowScriptParser";
import { AnnotationsOptContext } from "./NextflowScriptParser";
import { AnnotationContext } from "./NextflowScriptParser";
import { ElementValuesContext } from "./NextflowScriptParser";
import { AnnotationNameContext } from "./NextflowScriptParser";
import { ElementValuePairsContext } from "./NextflowScriptParser";
import { ElementValuePairContext } from "./NextflowScriptParser";
import { ElementValuePairNameContext } from "./NextflowScriptParser";
import { ElementValueContext } from "./NextflowScriptParser";
import { ElementValueArrayInitializerContext } from "./NextflowScriptParser";
import { BlockContext } from "./NextflowScriptParser";
import { BlockStatementContext } from "./NextflowScriptParser";
import { LocalVariableDeclarationContext } from "./NextflowScriptParser";
import { VariableDeclarationContext } from "./NextflowScriptParser";
import { TypeNamePairsContext } from "./NextflowScriptParser";
import { TypeNamePairContext } from "./NextflowScriptParser";
import { VariableNamesContext } from "./NextflowScriptParser";
import { ConditionalStatementContext } from "./NextflowScriptParser";
import { IfElseStatementContext } from "./NextflowScriptParser";
import { SwitchStatementContext } from "./NextflowScriptParser";
import { LoopStatementContext } from "./NextflowScriptParser";
import { ContinueStatementContext } from "./NextflowScriptParser";
import { BreakStatementContext } from "./NextflowScriptParser";
import { YieldStatementContext } from "./NextflowScriptParser";
import { TryCatchStatementContext } from "./NextflowScriptParser";
import { AssertStatementContext } from "./NextflowScriptParser";
import { StatementContext } from "./NextflowScriptParser";
import { CatchClauseContext } from "./NextflowScriptParser";
import { CatchTypeContext } from "./NextflowScriptParser";
import { FinallyBlockContext } from "./NextflowScriptParser";
import { ResourcesContext } from "./NextflowScriptParser";
import { ResourceListContext } from "./NextflowScriptParser";
import { ResourceContext } from "./NextflowScriptParser";
import { SwitchBlockStatementGroupContext } from "./NextflowScriptParser";
import { SwitchLabelContext } from "./NextflowScriptParser";
import { ForControlContext } from "./NextflowScriptParser";
import { EnhancedForControlContext } from "./NextflowScriptParser";
import { ClassicalForControlContext } from "./NextflowScriptParser";
import { ForInitContext } from "./NextflowScriptParser";
import { ForUpdateContext } from "./NextflowScriptParser";
import { CastParExpressionContext } from "./NextflowScriptParser";
import { ParExpressionContext } from "./NextflowScriptParser";
import { ExpressionInParContext } from "./NextflowScriptParser";
import { ExpressionListContext } from "./NextflowScriptParser";
import { ExpressionListElementContext } from "./NextflowScriptParser";
import { EnhancedStatementExpressionContext } from "./NextflowScriptParser";
import { StatementExpressionContext } from "./NextflowScriptParser";
import { PostfixExpressionContext } from "./NextflowScriptParser";
import { SwitchExpressionContext } from "./NextflowScriptParser";
import { SwitchBlockStatementExpressionGroupContext } from "./NextflowScriptParser";
import { SwitchExpressionLabelContext } from "./NextflowScriptParser";
import { ExpressionContext } from "./NextflowScriptParser";
import { CommandExpressionContext } from "./NextflowScriptParser";
import { CommandArgumentContext } from "./NextflowScriptParser";
import { PathExpressionContext } from "./NextflowScriptParser";
import { PathElementContext } from "./NextflowScriptParser";
import { NamePartContext } from "./NextflowScriptParser";
import { DynamicMemberNameContext } from "./NextflowScriptParser";
import { IndexPropertyArgsContext } from "./NextflowScriptParser";
import { NamedPropertyArgsContext } from "./NextflowScriptParser";
import { PrimaryContext } from "./NextflowScriptParser";
import { ListContext } from "./NextflowScriptParser";
import { MapContext } from "./NextflowScriptParser";
import { MapEntryListContext } from "./NextflowScriptParser";
import { MapEntryContext } from "./NextflowScriptParser";
import { MapEntryLabelContext } from "./NextflowScriptParser";
import { CreatorContext } from "./NextflowScriptParser";
import { DimContext } from "./NextflowScriptParser";
import { ArrayInitializerContext } from "./NextflowScriptParser";
import { AnonymousInnerClassDeclarationContext } from "./NextflowScriptParser";
import { CreatedNameContext } from "./NextflowScriptParser";
import { NonWildcardTypeArgumentsContext } from "./NextflowScriptParser";
import { TypeArgumentsOrDiamondContext } from "./NextflowScriptParser";
import { ArgumentsContext } from "./NextflowScriptParser";
import { EnhancedArgumentListInParContext } from "./NextflowScriptParser";
import { EnhancedArgumentListElementContext } from "./NextflowScriptParser";
import { StringLiteralContext } from "./NextflowScriptParser";
import { ClassNameContext } from "./NextflowScriptParser";
import { IdentifierContext } from "./NextflowScriptParser";
import { BuiltInTypeContext } from "./NextflowScriptParser";
import { KeywordsContext } from "./NextflowScriptParser";
import { RparenContext } from "./NextflowScriptParser";
import { NlsContext } from "./NextflowScriptParser";
import { SepContext } from "./NextflowScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NextflowScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NextflowScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewPrmrAlt?: (ctx: NewPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPrmrAlt?: (ctx: ListPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPrmrAlt?: (ctx: MapPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralAlt?: (ctx: StringLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteralAlt?: (ctx: NullLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprAlt?: (ctx: CastExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExprAlt?: (ctx: PostfixExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExprAlt?: (ctx: SwitchExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExprAlt?: (ctx: PowerExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExprAlt?: (ctx: ShiftExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExprAlt?: (ctx: RelationalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExprAlt?: (ctx: EqualityExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexExprAlt?: (ctx: RegexExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExprAlt?: (ctx: AndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmtAlt?: (ctx: BlockStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmtAlt?: (ctx: LoopStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmtAlt?: (ctx: BreakStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStmtAlt?: (ctx: YieldStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStmtAlt?: (ctx: AssertStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExprAlt?: (ctx: CommandExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmtAlt?: (ctx: ForStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmtAlt?: (ctx: WhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.scriptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatement?: (ctx: ScriptStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeStatement?: (ctx: IncludeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.includeNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeNames?: (ctx: IncludeNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.includeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeName?: (ctx: IncludeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessDef?: (ctx: ProcessDefContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessStatement?: (ctx: ProcessStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessDirective?: (ctx: ProcessDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInput?: (ctx: ProcessInputContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputType?: (ctx: ProcessInputTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputVal?: (ctx: ProcessInputValContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputEnv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputEnv?: (ctx: ProcessInputEnvContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputFile?: (ctx: ProcessInputFileContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputPath?: (ctx: ProcessInputPathContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputStdin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputStdin?: (ctx: ProcessInputStdinContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputExpr?: (ctx: ProcessInputExprContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processInputTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInputTuple?: (ctx: ProcessInputTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutput?: (ctx: ProcessOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputType?: (ctx: ProcessOutputTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputVal?: (ctx: ProcessOutputValContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputEnv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputEnv?: (ctx: ProcessOutputEnvContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputFile?: (ctx: ProcessOutputFileContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputPath?: (ctx: ProcessOutputPathContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputStdout`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputStdout?: (ctx: ProcessOutputStdoutContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputExpr?: (ctx: ProcessOutputExprContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.processOutputTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessOutputTuple?: (ctx: ProcessOutputTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.workflowDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWorkflowDef?: (ctx: WorkflowDefContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.workflowBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWorkflowBody?: (ctx: WorkflowBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.scriptStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatements?: (ctx: ScriptStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.modifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersOpt?: (ctx: ModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableInitializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializers?: (ctx: VariableInitializersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.emptyDims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDims?: (ctx: EmptyDimsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisFormalParameter?: (ctx: ThisFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassName?: (ctx: QualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.gstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstring?: (ctx: GstringContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.gstringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringValue?: (ctx: GstringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.gstringPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPath?: (ctx: GstringPathContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure?: (ctx: ClosureContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.annotationsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationsOpt?: (ctx: AnnotationsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValues?: (ctx: ElementValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValuePairName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairName?: (ctx: ElementValuePairNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeNamePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePairs?: (ctx: TypeNamePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePair?: (ctx: TypeNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.variableNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableNames?: (ctx: VariableNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.classicalForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassicalForControl?: (ctx: ClassicalForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.castParExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastParExpression?: (ctx: CastParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.expressionInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionInPar?: (ctx: ExpressionInParContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.expressionListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListElement?: (ctx: ExpressionListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpression?: (ctx: SwitchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.commandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExpression?: (ctx: CommandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.commandArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandArgument?: (ctx: CommandArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.pathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression?: (ctx: PathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.namePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamePart?: (ctx: NamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicMemberName?: (ctx: DynamicMemberNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.mapEntryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryList?: (ctx: MapEntryListContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.mapEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntry?: (ctx: MapEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryLabel?: (ctx: MapEntryLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.dim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim?: (ctx: DimContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.rparen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRparen?: (ctx: RparenContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.nls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNls?: (ctx: NlsContext) => Result;

	/**
	 * Visit a parse tree produced by `NextflowScriptParser.sep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSep?: (ctx: SepContext) => Result;
}

